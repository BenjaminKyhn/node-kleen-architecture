const User = require('../../entities/User');

module.exports = (UserRepository, CrmServices) => {

    async function Execute(firstName, lastName, email) {
        const student = await UserRepository.getByEmail(email);

        // validate
        if (!firstName || !lastName || !email) {
            throw new Error('validation failed');
        }

        // check if student exist by email
        if (student) {
            throw new Error('email already exist in the system');
        }

        // create new student object
        let newUser = new User(firstName, lastName, email);

        // persist student
        newUser = await UserRepository.add(newUser);

        // notify crm system
        await CrmServices.notify(newUser);

        return 'user added successfully';
    }
    return {
        Execute
    };
};

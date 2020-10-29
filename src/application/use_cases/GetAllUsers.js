const User = require('../../entities/User');

module.exports = (UserRepository) => {

    async function Execute(firstName, lastName, email) {
        return UserRepository.getAll();
    }

    return {
        Execute
    };
};

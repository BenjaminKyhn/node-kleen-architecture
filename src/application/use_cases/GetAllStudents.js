const Student = require('../../entities/User');

module.exports = (StudentRepository) => {

    async function Execute(firstName, lastName, email) {
        return StudentRepository.getAll();
    }

    return {
        Execute
    };
};

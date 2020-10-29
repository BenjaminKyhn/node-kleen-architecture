const AddUser = require('../../application/use_cases/AddUser');
const GetAllUsers = require('../../application/use_cases/GetAllUsers');

module.exports = (dependencies) => {

    const { userRepository } = dependencies.DatabaseService;

    const addNewUser = (req, res, next) => {
        // init use case
        const AddUserCommand = AddUser(userRepository);
        // extract student properties
        const { firstName, lastName, email } = req.body;
        // call use case
        AddUserCommand.Execute(firstName, lastName, email).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const getAllUsers = (req, res, next) => {
        // init use case
        const GetAllUsersQuery = GetAllUsers(userRepository);

        GetAllUsersQuery.Execute().then((users) => {
            res.json(users);
        }, (err) => {
            next(err);
        });
    };
    return {
        addNewUser,
        getAllUsers
    };
};

const express = require('express');
const UserController = require('../../../controllers/users/UserController');

// address - /users
// load dependencies
const usersRouter = (dependencies) => {
    const router = express.Router();

    // load controller with dependencies
    const controller = UserController(dependencies);

    router.route('/')
        .get(controller.getAllUsers)
        .post(controller.addNewUser);
    return router;
};


module.exports = usersRouter;

const express = require('express');
const users = require('./users');

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const usersRouter = users(dependencies);

    routes.use('/users', usersRouter);
    return routes;

};


module.exports = apiRouter;

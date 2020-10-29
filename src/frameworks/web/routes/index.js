const express = require('express');
const students = require('./users');

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const studentsRouter = students(dependencies);

    routes.use('/users', studentsRouter);
    return routes;

};


module.exports = apiRouter;

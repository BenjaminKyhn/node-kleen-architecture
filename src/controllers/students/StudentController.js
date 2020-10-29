const AddStudent = require('../../application/use_cases/AddStudent');
const GetAllStudents = require('../../application/use_cases/GetAllStudents');

module.exports = (dependecies) => {

    const { studentRepository } = dependecies.DatabaseService;
    const { CrmServices } = dependecies;

    const addNewStudent = (req, res, next) => {
        // init use case
        const AddStudentCommand = AddStudent(studentRepository, CrmServices);
        // extract student properties
        const { firstName, lastName, email } = req.body;
        // call use case
        AddStudentCommand.Execute(firstName, lastName, email).then((response) => {
            res.json(response);
        }, (err) => {
            next(err);
        });
    };

    const getAllStudents = (req, res, next) => {
        // init use case
        const GetAllStudentsQuery = GetAllStudents(studentRepository);

        GetAllStudentsQuery.Execute().then((students) => {
            res.json(students);
        }, (err) => {
            next(err);
        });
    };
    return {
        addNewStudent,
        getAllStudents
    };
};

module.exports = class User {
    constructor(firstName, lastName, email) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.email = email;
    }
};

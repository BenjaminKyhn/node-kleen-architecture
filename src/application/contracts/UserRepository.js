/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
module.exports = class UserRepository {
    constructor() { }

    add(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    update(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    delete(userInstance) {
        return Promise.reject(new Error('not implemented'));
    }

    getById(UserId) {
        return Promise.reject(new Error('not implemented'));
    }

    getByEmail(UserId) {
        return Promise.reject(new Error('not implemented'));
    }

    getAll() {
        return Promise.reject(new Error('not implemented'));
    }
};

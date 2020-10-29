/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */
const UserRepository = require('../../../application/contracts/UserRepository');

module.exports = class InMemoryUserRepository extends UserRepository {

    constructor() {
        super();
        this.users = [];
        this.currentId = 1;
    }

    async add(userInstance) {
        try {
            this.currentId = this.currentId + 1;
            userInstance.id = this.currentId;
            this.users.push(userInstance);
        } catch (error) {
            throw new Error('Error Occurred');
        }

        return userInstance;
    }

    async update(userInstance) {
        let user;
        try {
            user = this.users.find(x => x.id === userInstance.id);
            if (user) {
                Object.assign(user, { userInstance });
            }

        } catch (error) {
            throw new Error('Error Occurred');
        }

        return user;
    }

    async delete(userId) {
        try {
            const userIndex = this.users.findIndex(x => x.id === userId);
            if (userIndex !== -1) {
                this.users.splice(userIndex, 1);
            }
        } catch (error) {
            throw new Error('Error Occurred');
        }

        return true;
    }

    async getById(userId) {
        let user;
        try {
            const id = parseInt(userId);
            user = this.users.find(x => x.id === id);
        } catch (err) {
            throw new Error('Error Occurred');
        }

        return user;
    }

    async getByEmail(userEmail) {
        let user;
        try {
            user = this.users.find(x => x.email === userEmail);
        } catch (err) {
            throw new Error('Error Occurred');
        }

        return user;
    }

    async getAll() {
        return this.users;
    }
};

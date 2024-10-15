const { saveUser, User, getAllUsers } = require('../models/user.model.js');

const addNewUser = (name, lastName, email) => {
    const newUser = new User(name, lastName, email);
    return saveUser(newUser);
};

const getUsers = () => {
    const users = getAllUsers();
    return users;
};

module.exports = {
    addNewUser,
    getUsers
}


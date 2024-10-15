const { get } = require("../routes/user.route");

class User {
    constructor(name, lastname, email) {
        this.id = Date.now().toString();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}

const users = [];

const getAllUsers = () => {
    return users;
}

const saveUser = (user) => {
    users.push(user);
    return user;
}

module.exports = {
    User,
    saveUser,
    getAllUsers
};

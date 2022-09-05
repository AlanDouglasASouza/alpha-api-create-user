const { allUsersData } = require("../database/readUsers.js");

exports.User = (_name, _email) => {
    const users = allUsersData();
    return {
        name: _name,
        email: _email,
        deleted: false,
        id: users.length + 1,
    };
};

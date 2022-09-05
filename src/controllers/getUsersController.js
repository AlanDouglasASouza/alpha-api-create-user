const fs = require("fs");
const { allUsersData } = require("../database/readUsers.js");

exports.getUsers = (req, res) => {
    const usersActive = allUsersData().filter((element) => {
        return element.deleted === false;
    });

    res.status(200).send(usersActive);
};

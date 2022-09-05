const fs = require("fs");
const { User } = require("../data/user.js");
const { allUsersData } = require("../database/readUsers.js");
const { dbPath } = require("../database/readUsers.js");
const { userValidations } = require("../validations/userValidation.js");

exports.createUser = (req, res) => {
    try {
        userValidations(req.body);
    } catch (err) {
        return res.status(400).json({ message: err });
    }

    const users = allUsersData();
    const { name, email } = req.body;
    const newUser = User(name, email);

    users.push(newUser);

    fs.writeFile(dbPath, JSON.stringify(users), (err) => {
        if (err) throw err;
    });

    res.status(201).send();
};

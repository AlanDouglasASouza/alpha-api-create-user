const fs = require("fs");
const { allUsersData } = require("../database/readUsers.js");
const { dbPath } = require("../database/readUsers.js");
const { userValidations } = require("../validations/userValidation.js");

exports.updateUser = (req, res) => {
    const users = allUsersData();
    const id = req.params.id;

    if (
        !users.find((element) => {
            return element.id == id;
        })
    ) {
        return res.status(404).json({ message: "User not exist!" });
    }

    try {
        userValidations(req.body);
    } catch (err) {
        return res.status(400).json({ message: err });
    }

    users.some((element) => {
        if (element.id == id) {
            element.name = req.body.name;
            element.email = req.body.email;
        }
    });

    fs.writeFile(dbPath, JSON.stringify(users), (err) => {
        if (err) throw err;
    });

    res.status(204).send();
};

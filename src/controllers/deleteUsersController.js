const fs = require("fs");
const { allUsersData } = require("../database/readUsers.js");
const { dbPath } = require("../database/readUsers.js");

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const users = allUsersData();

    if (
        !users.find((element) => {
            return element.id == id;
        })
    ) {
        return res.status(404).json({ message: "User not exist!" });
    }

    users.some((element) => {
        if (element.id == id) {
            element.deleted = true;
        }
    });

    fs.writeFile(dbPath, JSON.stringify(users), (err) => {
        if (err) throw err;
    });

    res.status(204).send();
};

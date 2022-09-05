const fs = require("fs");
const db = __dirname + "/users.json";
let users = [];

const readUsers = async () => {
    fs.open(db, "r", (err, fd) => {
        if (err) {
            if (err.code === "ENOENT") {
                console.log(
                    "The user.json file does not exist. User.json file created."
                );
                fs.writeFile(db, "[]", (err) => {
                    if (err) throw err;
                });
                return;
            }

            throw err;
        }
        fs.readFile(db, async function (err, data) {
            if (err) throw err;
            users = await JSON.parse(data);
        });
    });
};

readUsers();
exports.allUsersData = () => {
    return users;
};

exports.dbPath = db;

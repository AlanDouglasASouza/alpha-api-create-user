const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/getUsersController.js");
const { createUser } = require("../controllers/createUsersController.js");
const { updateUser } = require("../controllers/updateUsersController.js");
const { deleteUser } = require("../controllers/deleteUsersController.js");
const { staticController } = require("../controllers/staticController.js");

router.get("/usuarios", getUsers);
router.post("/usuarios", createUser);
router.put("/usuarios/:id", updateUser);
router.delete("/usuarios/:id", deleteUser);
router.get("/cadastro", staticController);

module.exports = router;

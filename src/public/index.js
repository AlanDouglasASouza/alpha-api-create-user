import formUser from "./modules/formUser.js";
import header from "./modules/header.js";
import renderTableUsers from "./services/renderTableUsers.js";
import resultUsers from "./modules/resultUsers.js";
import { createUser } from "./services/createUser.js";

const app = document.querySelector("#app");

app.innerHTML = header();
app.innerHTML += formUser();
app.innerHTML += resultUsers();

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    createUser(e.target);
});

renderTableUsers();

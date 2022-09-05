import getUsers from "./getUsers.js";
import renderUser from "../modules/renderUser.js";
import tableTitle from "../modules/tableTitle.js";
import deleteUser from "./deleteUser.js";
import editUser from "./editUser.js";

export default async function renderTableUsers() {
    const users = await getUsers();
    const table = document.querySelector("table");
    let counts = 0;

    table.innerHTML = tableTitle();

    if (!users) return;

    for (const user of users) {
        counts++;
        table.innerHTML += renderUser({
            backgroundLine: counts % 2 == 0 ? 2 : 1,
            id: ("0000" + user.id).slice(-4),
            name: user.name,
            email: user.email,
            dataId: counts,
        });
    }

    const btnEditConf = document.querySelectorAll('[data-id="edit-conf"]');
    btnEditConf.forEach((e) => {
        e.style.display = "none";
        e.addEventListener("click", (e) => {
            const id = e.target.id.substring(9);
            const userId = document.querySelector(`[data-id="id${id}"]`);
            const iptName = document.querySelector(`#ipt-name${id}`);
            const iptEmail = document.querySelector(`#ipt-email${id}`);

            editUser(userId.textContent, {
                name: iptName.value,
                email: iptEmail.value,
            });
        });
    });

    const del = document.querySelectorAll('[data-id="del"]');
    del.forEach((element) => {
        element.addEventListener("click", (e) => {
            const id = e.target.id.substring(3);
            const userId = document.querySelector(`[data-id="id${id}"]`);
            deleteUser(userId.textContent);
        });
    });

    const edit = document.querySelectorAll('[data-id="edit"]');
    edit.forEach((element) => {
        element.addEventListener("click", (e) => {
            const id = e.target.id.substring(4);
            const iptName = document.querySelector(`#ipt-name${id}`);
            const iptEmail = document.querySelector(`#ipt-email${id}`);

            iptName.disabled = false;
            iptEmail.disabled = false;
            iptEmail.style = "color: black";
            iptName.style = "color: black;";
            iptName.focus();

            document.querySelector(`#edit-conf${id}`).style.display = "block";
            e.target.style.display = "none";
        });
    });
}

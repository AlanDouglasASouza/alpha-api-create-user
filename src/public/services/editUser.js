import renderTableUsers from "./renderTableUsers.js";

export default async function editUser(id, body) {
    try {
        const deleteUser = await fetch(`/usuarios/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (!deleteUser.ok) {
            return Promise.reject("Erro interno na requisição");
        }

        renderTableUsers();
    } catch (err) {
        console.error(err);
    }
}

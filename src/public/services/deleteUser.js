import renderTableUsers from "./renderTableUsers.js";

export default async function deleteUser(id) {
    try {
        const deleteUser = await fetch(`/usuarios/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!deleteUser.ok) {
            return Promise.reject("Erro interno na requisição");
        }

        renderTableUsers();
    } catch (err) {
        console.error(err);
    }
}

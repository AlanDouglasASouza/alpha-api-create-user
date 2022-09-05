import renderTableUsers from "./renderTableUsers.js";

export async function createUser(form) {
    const inputs = document.querySelectorAll(".input-form");
    const user = {
        name: form.name.value,
        email: form.email.value,
    };

    if (!form.name.value || !form.email.value) {
        alert("Preencha todos os campos antes de continuar!");
        return;
    }

    try {
        const create = await fetch(`/usuarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!create.ok) {
            return Promise.reject("Erro interno na requisição");
        }

        renderTableUsers();
        inputs.forEach((el) => (el.value = ""));
    } catch (err) {
        console.error(err);
    }
}

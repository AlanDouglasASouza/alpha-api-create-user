export default async function getUsers() {
    try {
        const users = await fetch("/usuarios");
        if (!users.ok) {
            return Promise.reject("Erro ao fazer requisição!");
        }
        const data = await users.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

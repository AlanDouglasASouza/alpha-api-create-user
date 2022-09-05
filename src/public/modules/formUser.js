export default function formUser() {
    return `
        <div class="box-form" id="forms-users">
                <div class="title-create">
                    <h1 id="title-form">FORMULÁRIO DE CADASTRO DE USUÁRIOS</h1>
                    <p>
                        Para inserir usuários na lista, preencha os dados
                        abaixo.
                    </p>
                </div>
                <div class="box" id="form-container">
                    <form action="/test" >
                        <input
                            class="input-form"
                            id="input-name"
                            type="text"
                            name="name"
                            placeholder="Nome completo"
                        />
                        <input
                            class="input-form"
                            id="input-email"
                            type="email"
                            name="email"                            
                            placeholder="E-mail"
                        />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
    `;
}

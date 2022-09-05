# Cadatro de usuário

A aplicação tem como objetivo ser uma API com funções de CRUD, que cadastra usuários recebendo seu nome e seu e-mail. Permite exibir uma lista dos usuários já cadastrados e tem opções de editar o usuário, e fazer o soft delete do mesmo.

<div align="center" >
  <img src="/src/public/assets/exemple-02.png" />  
</div>

## 🚀 Começando

Faça o clone desse repositório:

```
git clone https://github.com/AlanDouglasASouza/alpha-api-create-user.git
```

### 📋 Pré-requisitos

```
Node.js
```

### 🔧 Instalação

Para iniciar a aplicação, estando dentro do diretório e em um ambiante com node.js, é necessário dar o comando `npm install` ou `yarn install` para instalar as dependências:

```
npm install
```

ou

```
yarn install
```

Foi configurado, visando segurança, que a porta que irá servir a aplicação seja setada em um arquivo .env em uma variável `PORT=porta-desejada`. Em um arquivo .env insira:

```
PORT=<porta-desejada>
```

O arquivo `server.js` que se encontra em `src/server.js` inicia a aplicação:

```
node src/server.js
```

Após iniciado o console exibe a mensagem "Server ON!", e se o arquivo user.json ainda não existir a aplicação criará esse arquivo e mostrará no console essa ação. (Observação: O arquivo user.json só é criado a primeira vez que a aplicação for iniciada, e somente se não existir. Caso a aplicação for reiniciada com o arquivo já existente, ela não ira refazer o arquivo e não exibirá no console).

```
Server ON!
The user.json file does not exist. User.json file created.
```

## ⚙️ Testando Rotas

As rotas para uso da aplicação são:

```
GET /usuarios
```

Irá trazer todos os usuários cadastrados que se encontram em user.json e não constam como deletados. Retorna `Status: 200 OK`.

```
POST /usuarios

{
    "name": "João Candido",
    "email": "joao@gmail.com"
}
```

Irá criar o usuário com os dados do corpo da requisição e retorna `Status: 204 OK`.

```
PUT /usuarios/${id}

{
    "name": "Maria Aparecida",
    "email": "mah@gmail.com"
}
```

Irá atualizar o usuário do id setado na URL com os dados no corpo da requisição. Retorna `Status: 204 OK`.

```
DELETE /usuarios/${id}
```

Irá fazer um soft delete no usuário do id fornecido na URL. O usuário não irá ser retornado no GET /usuarios. Retorna `Status: 204 OK`.

## 🖥️ Usando a Interface Visual

A interface da aplicação está na rota `/cadastro`. A pasta `src/public` possui os arquivos que serão servidos de forma estática para a interface da nossa aplicação, onde é possível fazer toda a rotina - cadastrar, deletar ou editar - de forma intuitiva. Por padrão a interface lista todos os usuários já cadastrados que estão no arquivo `user.json`, e atualiza a cada interação do usuário na movimentação das rotinas de cadastro.

Acesse a rota `http://localhost:${rota-escolhida}/cadastro` para usar a interface visual da aplicação 😁:

<div align="center" >
  <img src="/src/public/assets/exemple-01.png" />  
</div>

## 🛠️ Construído com

-   [Express](https://expressjs.com/pt-br/) - Framework web
-   [Npm](https://www.npmjs.com/) - Gerenciador de Dependências

## ✒️ Autores

-   **Equipe Alpha EdTech** - _Proposta do projeto e design do protótipo_ - [Alpha EdTech](https://www.alphaedtech.org.br/)
-   **Alan D. A. Souza** - _Desenvolvimento e construção do projeto_ - [Alan Douglas](https://github.com/AlanDouglasASouza)

## 🎁 Expressões de gratidão

-   Instituto Alpha Lumen 🫂;
-   Equipe Alpha Edtech 📢;

---

⌨️ com ❤️ por [Alan Douglas Artigas de Souza](https://www.linkedin.com/in/alan-douglas-artigas-souza) 😊

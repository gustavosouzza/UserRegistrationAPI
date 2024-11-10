# API de cadastro de dados de usuários

API para cadastro e consulta de dados de usuários. Este projeto oferece endpoints para cadastrar usuários e consultar informações como Nome, Email, Status e ID.

O Front-end consome essa API para exibir os dados dos usuários, fornecendo uma interface interativa para cadastro.


###  Começando


Clone repository
```
Dar exemplos
```

Run Front-end:

```
cd frontend
npm install
```
Para iniciar o servidor de desenvolvimento, rode o comando:
```
npm run dev
```
Run Back-end:

```
cd backend
npm install
```
Para iniciar o servidor de desenvolvimento, rode o comando:
```
npm run dev
```
O servidor estará rodando na URL http://localhost:3333.


##  Visão geral da arquitetura

### 1. Back-end
O back-end é responsável pela persistência dos dados dos usuários. Ele oferece endpoints para criar, consultar e atualizar os dados.

Abaixo, temos exemplos de como o back-end pode ser implementado com Node.js e MongoDB utilizando o framework Express:

###  2. Front-end
O Front-end é desenvolvido utilizando React e é responsável pela interface com o usuário. O React consome a API do back-end para exibir os dados dos usuários e interagir com eles (adicionar, editar, excluir).

## Tecnologias e Ferramentas Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

Node.js - Ambiente de execução Typescript.

TypeScript - Superset de JavaScript para adicionar tipagem estática.

MongoDB - Banco de dados NoSQL para armazenamento de dados do usuário.

React - Framework usada para construção do Front-end 

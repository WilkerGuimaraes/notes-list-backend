# API - Lista de Anotações

## 📃 Descrição

Esta é uma API que serve para realizar a integração do projeto Front-end "Lista de Anotações" com um banco de dados MongoDB. Sendo capaz de realizar rotas de leitura, criação e remoção de anotações.

## ⚙ Funcionamento

- O usuário pode adicionar uma nova nota.
- Esta nota será armazenada no banco de dados.
- O projeto Front-end irá fazer uma requisição nesta API, para que assim os dados das notas sejam retornados do banco de dados.
- O usuário também poderá realizar uma requisição através da interface Front-end para deletar o produto do banco de dados e assim removê-lo da tela.

## 🛠 Tecnologias

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## 🧰 Recursos

Este projeto aborda o uso de algumas ferramentas de desenvolvimento back-end utilizado em conjunto com o Node.js:

- `prisma`: o prisma é um ORM que foi utilizado para simplificar a interação com o banco de dados fornecendo uma interface amigável para consultas e manipulação de dados. Nesta API, o prisma foi utilizado para permitir a interação com o MongoDB, que é um banco de dados não relacional.
- `cors`(Cross-Origin Resource Sharing): é um mecanismo de segurança utilizado pelos navegadores para determinar se scripts de uma origem determinada têm permissão para acessar recursos de outra origem na web. Com isso o projeto Front-end conseguiu realizar as solicitações da API sem violar as políticas de segurança do navegador.
- `zod`: o zod é uma biblioteca TypeScript de validação de esquemas (schema validation) e tipagem de dados. Com esta ferramenta, está aplicação foi desenvolvida aplicando regras de validação para verificar a tipagem dos dados enviados e recebidos por esta API em tempo de compilação, para assim evitar erros de tipo tornando o código mais seguro.

## 💻 Executando

- Após clonar o repositório, crie um arquivo na raiz do seu projeto chamado `.env` e crie uma nova variável com o nome `DATABASE_URL=`. Logo após, defina neste arquivo seu link de conexão ao banco de dados fornecido na sua conta no site do MongoDB. Ao copiar seu código de conexão, substitua o nome de usuário e senha com os seus dados seguindo as instruções do site do MongoDB.

![env_file](https://imgur.com/KZdhpbi.png)

- Após isso, execute o seguinte comando para instalar todas as dependências:

```

npm install

```

- Em seguida, execute este script para que o prisma realize a conexão com o MongoDB.

```

npm run db:migrate

```

- Depois de verificar se as configurações estão corretas, execute no terminal o seguinte script para executar esta API:

```

npm run dev

```

O servidor estará rodando na porta `3333` do seu navegador:`http://localhost:3333`

Para ver esta API funcionando é recomendável utilizar em conjunto com o projeto Front-end "Lista de Anotações". Acesse o seguinte link para mais informações: https://github.com/WilkerGuimaraes/notes-list-frontend

Porém, caso você queira testar esta API sem o Front-end, você pode utilizar o arquivo `api.http` localizado para pasta raiz do projeto. Neste arquivo contém todas as requisições desta API, para utilizá-las siga as seguintes instruções:

1. Baixe a extensão do VSCode chamada `Rest Client`
   ![rest-client-img](https://imgur.com/bFStodZ.png)

2. Para utilizar a requisição POST, informe o conteúdo da anotação como valor da propriedade `content`. Após a criação da nova nota, verifique o seu banco de dados para visualizar a anotação armazenada.
3. Para utilizar a requisição DELETE, você precisa informar no final da requisição, após `/notes/`, o valor do `id` da anotação ao qual você deseja deletar.

## 🙋‍♂️ Colaboradores

Este projeto foi desenvolvido apenas por mim Wilker Guimarães, com o objetivo de desenvolver e aplicar os meus conhecimentos Back-end e utilizá-lo em conjunto com uma aplicação Front-end.

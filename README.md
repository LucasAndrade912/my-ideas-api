# My Ideas API

![GitHub repo size](https://img.shields.io/github/repo-size/LucasAndrade912/project-manager-api?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/LucasAndrade912/project-manager-api?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/LucasAndrade912/project-manager-api?style=for-the-badge)

> API feita para colocar em prática meu conhecimento em Adonisjs. A API permite armazenar ideias que você pode ter e depois consultar suas informações.

## 🛠️ Techs

<div>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Adonis-430098?style=for-the-badge&logo=AdonisJS&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-D9281A?style=for-the-badge&logo=redis&logoColor=white" />
</div>

## 🛸 Instalação e Execução do projeto

Para clonar este repositório utilize o comando:

```bash
git clone https://github.com/LucasAndrade912/my-ideas-api.git
```

Em seguida instale todas as dependências do projeto:

```bash
npm install

# or

yarn install
```

É necessário ter o Postgres e o Redis instalados em sua máquina, ou você pode utilizar imagens docker para roda-los:

- Postgres: `docker run -d --name nome-do-container -p 5432:5432 -e POSTGRES_PASSWORD=root postgres`
- Redis: `docker run -d --name nome-do-container -p 6379:6379 redis`

Após as instalações, rode `npm start` ou `yarn start` para executar o projeto.

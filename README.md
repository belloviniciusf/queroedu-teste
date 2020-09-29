<h1 align="center">
  Teste técnico - Quero Educação
</h1>

## Informações gerais

O projeto encontra-se disponível no Heroku (https://queroedu-test.herokuapp.com/), assim como toda a documentação das rotas (https://queroedu-test.herokuapp.com/docs/#/)

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- Node.js
- Express
- Docker
- MySQL 8.0
- Sequelize
- JWT
- Jest
- Swagger

## Commits

O projeto seguiu o conceito de commits semântico disponível em https://ildaneta.dev/posts/entendo-a-import%C3%A2ncia-dos-commits-sem%C3%A2nticos/

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- NodeJS
- Docker e docker-compose
- Make
- Yarn

O banco de dados em ambiente de desenvolvimento está em um container docker.

### Primeiros passos

```bash
# Clone o projeto
$ git clone https://github.com/belloviniciusf/queroedu-teste

# Acesse a pasta criada
$ cd queroedu-teste

# Crie uma cópia do arquivo .env.example e renomeie para .env

# Instale as dependências
$ yarn

# Crie o container do banco de dados

$ make init

# Aguarde alguns segundos até o banco de dados ficar pronto para uso no container
# Se necessário, rode make logs para verificar o estado

# Rode as migrations

$ make migrations

# Caso queira adicionar dados fictícios no banco para teste

$ make seeds

# Inicie o projeto

$ yarn dev
```


## Endpoints

Ao usar os endpoints é necessário um token, para isso basta criar uma conta ou fazer login em uma existente. Ao fazer login retorna-se o token de acesso.

## POST - /auth/login

Esta conta já está criada

```json
{
    "email": "teste@queroedu.com.br",
    "password": "queroedu"
}
```

## POST - /users

```json
{
    "email": "john@doe.com",
    "password": "queroedu"
}

```

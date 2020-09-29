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

# Mac e Linux

$ cp .env.example .env

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


# Para executar os testes

$ yarn test
```


## Endpoints

A documentação completa dos endpoints está disponível em https://queroedu-test.herokuapp.com/docs/#/. Além disso, o arquivo de importação .json do software Insomnia está disponível na raiz do projeto.

<i>Autenticação</i> <br>
Ao usar os endpoints de cursos e ofertas é necessário um token, para isso é necessário fazer o login. Caso queira criar uma conta, use a rota de /users.
<b>Ao adicionar o token no Swagger é necessário adicionar o prefixo Bearer</b>

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

## GET - /courses

```json
{
    "total": 10,
    "courses": [
      {
        "name": "História",
        "kind": "Virtual",
        "level": "Tecnólogo",
        "shift": "Manhã",
        "university": {
          "name": "Universidade 8",
          "score": 2,
          "logo_url": "https://api.adorable.io/avatars/8"
        },
        "campus": {
          "name": "São Paulo",
          "city": "Campus 8"
        }
      }
    ]
}
```

## GET - /offers

```json
{
    "total": 10,
    "offers": [
      {
        "full_price": 781,
        "price_with_discount": 100,
        "discount_percentage": 87.2,
        "start_date": "29/09/2020",
        "enrollment_semester": "2020.2",
        "enabled": 1,
        "course": {
          "kind": "Virtual",
          "level": "Licenciatura",
          "shift": "Noite",
          "name": "Biomedicina"
        },
        "campus": {
          "city": "São Carlos",
          "name": "Campus 5"
        },
        "university": {
          "name": "Universidade 5",
          "score": 4,
          "logo_url": "https://api.adorable.io/avatars/5"
        }
      }
    ]
}
```

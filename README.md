<h1 align="center">
  Teste técnico - Quero Educação
</h1>

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

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- NodeJS
- Docker e docker-compose
- Make
- Yarn

O banco de dados em ambiente de desenvolvimento está em um container docker.

### Commits

O projeto seguiu o conceito de commits semântico disponível em https://ildaneta.dev/posts/entendo-a-import%C3%A2ncia-dos-commits-sem%C3%A2nticos/

### Primeiros passos

```bash
# Clone o projeto
$ git clone https://github.com/belloviniciusf/queroedu-teste

# Acesse a pasta criada
$ cd queroedu-teste

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

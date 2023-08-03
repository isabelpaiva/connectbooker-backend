# Connect Booker
Este repositório contém um projeto CRUD construído usando Express. 

## Tabela de Conteúdos

- [Instalação](#instalação)
- [API Endpoints](#api-endpoints)
- [Testes](#testes)
- [Banco de Dados](#banco-de-dados)


## Instalação

1. Clone o repositório:

```bash
$ git clone git@github.com:isabelpaiva/connectbooker-backend
```

2. Instale as dependências:
```bash
npm install
``` 

4. Rode as migrations:
```bash
npm run typeorm migration:run
```

5. Inicie o servidor:
```bash
npm run dev
```

6. Abra a aplicação no navegador:
```bash
http://localhost:3001
```

## API Endpoints
A API fornece os seguintes endpoints:

# Users 

- POST /login - Realiza o login de um usuário.
```markdown
{
	"email": "user@mail.com",
	"password": "1234",

}
```

- POST /users - Registra um usuário.
```markdown
{
  "email": "user@mail.com",
  "password": "1234",
  "phone": "11997848484",
  "name": "John Doe"
}
```

- PATCH /users/{id} - Atualiza um usuário. 


- DELETE /users{id} - Deleta um usuário.

- GET /users/ - Lista todos os usuários.

- GET /users/profile/{id} - Obtém informações de um usuário específico por meio do seu ID.


# Contatos 

- POST /schedule/{id} - Cria um novo contato associado a um usuário específico pelo seu ID.
```markdown
{
  "email": "user@mail.com",
  "phone": "11997848484",
  "name": "John Doe"
}
```
- DELETE /schedule/{id} - Deleta um contato associado a um usuário pelo seu ID.

- PATCH /schedule/{id} - Atualiza os dados de um contato associado a um usuário pelo seu ID.

- GET /schedule/{id}- Obtém informações de um contato específico associado a um usuário pelo seu ID.


## Banco de Dados

O projeto utiliza o PostgresSQL como banco de dados. Crie um database utilizando o comando CREATE DATABASE dentro do terminal psql.
As migrações de banco de dados necessárias são gerenciadas usando o TypeORM.

Para instalar o PostgresSQL localmente, você pode [clicar aqui](https://www.postgresql.org/download/).

# Testes

Este é um projeto de entrega que contém testes automatizados implementados utilizando a biblioteca de testes Jest. 

## Como Executar os Testes

Abra o terminal/prompt de comando na pasta do projeto.
Após a instalação das dependências, você pode executar os testes com o seguinte comando:

```bash
npm test
``` 

O Jest irá automaticamente buscar todos os arquivos de teste com o padrão de nomenclatura *.test.js ou *.spec.js e executá-los.
# Connect Booker
Este repositório contém um projeto CRUD construído usando Express. 

## Tabela de Conteúdos

- [Instalação](#instalação)
- [Configuração](#configuração)
- [API Endpoints](#api-endpoints)
- [Banco de Dados](#banco-de-dados)

## Instalação

1. Clone o repositório:

```bash
$ git clone git@github.com:isabelpaiva/connectbooker-backend
```

2. Instale as dependências

## Configuração

1. Inicie a aplicação
2. A API estará acessível em http://localhost:3000


## API Endpoints
A API fornece os seguintes endpoints:

#Users 

POST /login - Realiza o login de um usuário.
```markdown
{
	"email": "user@mail.com",
	"password": "1234",

}
```

POST /users - Registra um usuário.
```markdown
{
  "email": "user@mail.com",
  "password": "1234",
  "phone": "11997848484",
  "name": "John Doe"
}
```

PATCH /users/{id} - Atualiza um usuário. 


DELETE /users{id} - Deleta um usuário.

GET /users/ - Lista todos os usuários.

GET /users/profile/{id} - Obtém informações de um usuário específico por meio do seu ID.

#Contatos 

POST /schedule/{id} - Cria um novo contato associado a um usuário específico pelo seu ID.```markdown
```markdown
{
  "email": "user@mail.com",
  "phone": "11997848484",
  "name": "John Doe"
}
```

DELETE /schedule/{id} - Deleta um contato associado a um usuário pelo seu ID.

PATCH /schedule/{id} - Atualiza os dados de um contato associado a um usuário pelo seu ID.

GET /schedule/{id}- Obtém informações de um contato específico associado a um usuário pelo seu ID.


## Banco de Dados

O projeto utiliza o PostgresSQL como banco de dados. As migrações de banco de dados necessárias são gerenciadas usando o TypeORM.

Para instalar o PostgresSQL localmente, você pode [clicar aqui](https://www.postgresql.org/download/).

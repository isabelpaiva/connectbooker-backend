import { DataSource } from 'typeorm'
import app from '../app'
import { AppDataSource } from '../data-source'
import supertest from 'supertest'
import { User } from '../entities/user.entity'
let connection: DataSource
const userRepository = AppDataSource.getRepository(User)

beforeAll(async () => {
  await AppDataSource.initialize()
    .then((res) => (connection = res))
    .catch((error) => console.error(error))
})

afterAll(async () => {
  await userRepository.delete({})
  await connection.destroy()
})

describe('Bloco de Teste Usuarios', () => {
  test('Deve retornar todos os usuarios', async () => {
    const response = await supertest(app).get('/users')
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('Criando corretamente um novo usuário', async () => {
    const response = await supertest(app).post('/users').send({
      name: 'Saul',
      email: 'saul.contatodev@gmail.com',
      password: '123456789',
      phone: '7199999-9999',
    })
    expect(response.status).toBe(201)
  })

  test('Atualizando dados de um usuario', async () => {
    const createUserResponse = await supertest(app).post('/users').send({
      name: 'Isa',
      email: 'isa.contatodev@gmail.com',
      password: '123456789',
      phone: '7199999-9999',
    })

    // Verificar se o usuário foi criado com sucesso
    expect(createUserResponse.status).toBe(201)
    const userId = createUserResponse.body.id

    // Atualizar os dados do usuário criado
    const updateUserResponse = await supertest(app)
      .patch(`/users/${userId}`)
      .send({
        name: 'Nome alterado', // Corrigido para "name"
      })

    // Verificar se a atualização foi bem-sucedida
    expect(updateUserResponse.status).toBe(200)
  })
  test('Deletando um usuario', async () => {
    const createUserResponse = await supertest(app).post('/users').send({
      name: 'Isa Vai ser apagada',
      email: 'isadeletado.contatodev@gmail.com',
      password: '123456789',
      phone: '7199999-9999',
    })
    const userId = createUserResponse.body.id

    const updateUserResponse = await supertest(app).delete(`/users/${userId}`)
    expect(updateUserResponse.status).toBe(204)
  })
})

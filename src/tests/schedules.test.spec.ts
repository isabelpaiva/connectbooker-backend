import supertest from 'supertest'
import { DataSource } from 'typeorm'
import app from '../app'
import { AppDataSource } from '../data-source'
import { Schedule } from '../entities/schedule.entitie'
import { User } from '../entities/user.entity'
let connection: DataSource
const scheduleRepository = AppDataSource.getRepository(Schedule)
const userRepository = AppDataSource.getRepository(User)

let authToken: string
let user: any
let contatoId: string

beforeAll(async () => {
  await AppDataSource.initialize()
    .then((res) => (connection = res))
    .catch((error) => console.error(error))

  user = await supertest(app).post('/users').send({
    name: 'Ana Contato',
    email: 'ana.contatodev@gmail.com',
    password: '123456789',
    phone: '7199999-9999',
  })

  const response = await supertest(app)
    .post('/login')
    .send({ email: 'ana.contatodev@gmail.com', password: '123456789' })

  authToken = response.body.token
})

afterAll(async () => {
  await scheduleRepository.delete({})
  await userRepository.delete({})
  await connection.destroy()
})

describe('Bloco de Teste Contatos', () => {
  test('Criando corretamente um novo contato', async () => {
    const id = user.body.id
    const response = await supertest(app)
      .post(`/schedule/${id}`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: 'Isa Contato',
        email: 'isacontato@mail.com',
        phone: '77 77777-7777',
      })

    expect(response.status).toBe(201)
  })

  test('Retornando todos os contatos do usuario', async () => {
    const id = user.body.id
    const response = await supertest(app)
      .get(`/schedule/${id}`)
      .set('Authorization', `Bearer ${authToken}`)

    contatoId = response.body[0].id

    expect(response.status).toBe(200)
  })

  test('Atualizando contato Corretamente', async () => {
    const response = await supertest(app)
      .patch(`/schedule/${contatoId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        name: 'Isa Atualizado',
      })
    expect(response.status).toBe(200)
  })

  test('Deletando um contato corretamente', async () => {
    const response = await supertest(app)
      .delete(`/schedule/${contatoId}`)
      .set('Authorization', `Bearer ${authToken}`)

    expect(response.status).toBe(204)
  })
})

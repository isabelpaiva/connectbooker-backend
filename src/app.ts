import 'reflect-metadata'
import express from 'express'
import { userRoutes } from './routes/users.routes'
import { handleAppError } from './middlewares/handleAppError.middleware'
import { sessionRoutes } from './routes/session.routes'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use(handleAppError)

export default app

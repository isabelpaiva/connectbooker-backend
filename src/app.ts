import 'reflect-metadata'
import express from 'express'
import { userRoutes } from './routes/users.routes'
import { handleAppError } from './middlewares/handleAppError.middleware'
import { sessionRoutes } from './routes/session.routes'
import { scheduleRoutes } from './routes/schedule.routes'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: '*',
  }),
)
app.use('/users', userRoutes)
app.use('/login', sessionRoutes)
app.use('/schedule', scheduleRoutes)
app.use(handleAppError)

export default app

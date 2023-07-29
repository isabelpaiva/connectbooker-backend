import { Router } from 'express'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware'
import { scheduleSchema } from '../schemas/schedule.schema'
import { createScheduleController } from '../controllers/schedule.controller'

export const scheduleRoutes = Router()

scheduleRoutes.post(
  '/:id',
  ensureAuthMiddleware,
  ensureDataIsValid(scheduleSchema),
  createScheduleController,
)

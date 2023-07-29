import { Router } from 'express'
import {
  createScheduleController,
  listScheduleController,
} from '../controllers/schedule.controller'
import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware'
import { scheduleSchema } from '../schemas/schedule.schema'

export const scheduleRoutes = Router()

scheduleRoutes.post(
  '/:id',
  ensureAuthMiddleware,
  ensureDataIsValid(scheduleSchema),
  createScheduleController,
)
scheduleRoutes.get('/:id', ensureAuthMiddleware, listScheduleController)

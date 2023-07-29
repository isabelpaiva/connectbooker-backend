import { Request, Response } from 'express'
import { createScheduleService } from '../services/schedule/createSchedule.service'
import { deleteScheduleService } from '../services/schedule/deleteSchedule.service'
import { listScheduleService } from '../services/schedule/listSchedule.service'
import { updateScheduleService } from '../services/schedule/updateSchedule.service'

export const createScheduleController = async (req: Request, res: Response) => {
  const userId = req.params.id
  const newSchedule = await createScheduleService(req.body, userId)

  return res.status(201).json(newSchedule)
}

export const listScheduleController = async (req: Request, res: Response) => {
  const userId = res.locals.userId
  const schedule = await listScheduleService(userId)
  return res.json(schedule)
}

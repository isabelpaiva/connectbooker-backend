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

export const updateScheduleController = async (req: Request, res: Response) => {
  const schedule = await updateScheduleService(req.params.id, req.body)
  return res.status(200).json(schedule)
}

export const deleteScheduleController = async (req: Request, res: Response) => {
  await deleteScheduleService(req.params.id)
  return res.status(204).json({})
}

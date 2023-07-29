import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { AppError } from '../errors/AppError'
import { Schedule } from '../entities/schedule.entitie'

export const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const scheduleRepository = AppDataSource.getRepository(Schedule)

  const scheduleId = req.params.id
  const userId = res.locals.userId

  const schedule = await scheduleRepository.findOne({
    where: {
      id: scheduleId,
    },
    relations: {
      user: true,
    },
  })

  if (!schedule) {
    throw new AppError('Contato não encontrado', 404)
  }

  if (!schedule?.user.id === userId) {
    throw new AppError(
      'Usuario não possui permissão para deletar este contato',
      403,
    )
  }

  return next
}

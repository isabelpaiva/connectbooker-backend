import { AppDataSource } from '../../data-source'
import { Schedule } from '../../entities/schedule.entitie'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/AppError'
import { TSchedule } from '../../interfaces/schedules.interfaces'
import { scheduleSchema } from '../../schemas/schedule.schema'

export const listScheduleService = async (
  userId: string,
): Promise<TSchedule[]> => {
  const scheduleRepository = AppDataSource.getRepository(Schedule)
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new AppError('user not found', 404)
  }

  return await scheduleRepository.find({
    where: {
      user,
    },
  })
}

import { AppDataSource } from '../../data-source'
import { Schedule } from '../../entities/schedule.entitie'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/AppError'
import { TSchemaRequest } from '../../interfaces/schedules.interfaces'
import { scheduleSchema } from '../../schemas/schedule.schema'

export const createScheduleService = async (
  data: TSchemaRequest,
  userId: string,
) => {
  const scheduleRepository = AppDataSource.getRepository(Schedule)
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id: userId })

  if (!user) {
    throw new AppError('user not found', 404)
  }

  const schedule: Schedule = scheduleRepository.create({
    ...data,
    user,
  })

  await scheduleRepository.save(schedule)

  return scheduleSchema.parse(schedule)
}

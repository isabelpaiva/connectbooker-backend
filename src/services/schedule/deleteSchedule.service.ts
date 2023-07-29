import { AppDataSource } from '../../data-source'
import { Schedule } from '../../entities/schedule.entitie'

export const deleteScheduleService = async (id: string) => {
  const scheduleRep = AppDataSource.getRepository(Schedule)
  await scheduleRep.delete({ id })
}

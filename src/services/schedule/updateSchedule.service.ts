import { AppDataSource } from '../../data-source'
import { Schedule } from '../../entities/schedule.entitie'

export const updateScheduleService = async (id: string, payload: any) => {
  const scheduleRepository = AppDataSource.getRepository(Schedule)
  await scheduleRepository.update(id, { ...payload })
  const scheduleUpdated = await scheduleRepository.findOneBy({ id })

  return scheduleUpdated
}

import { z } from 'zod'
import { scheduleSchema } from '../schemas/schedule.schema'

export type TSchemaRequest = z.infer<typeof scheduleSchema>
export type TSchedule = z.infer<typeof scheduleSchema>

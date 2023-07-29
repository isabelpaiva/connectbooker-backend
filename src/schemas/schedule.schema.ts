import { z } from 'zod'

export const scheduleSchema = z.object({
  name: z.string().max(120),
  email: z.string().email().max(45),
  phone: z.string().max(14),
})

export const scheduleResponseSchema = z.object({
  id: z.string().uuid().optional(),
  ...scheduleSchema.shape,
  createdAt: z.string().optional(),
})

export const allContactsSchema = scheduleResponseSchema.array()

export const contactUpdateSchema = scheduleSchema.partial()

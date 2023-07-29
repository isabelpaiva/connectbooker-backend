import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm'
import { User } from './user.entity'

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 120 })
  name: string

  @Column({ length: 45 })
  email: string

  @Column({ length: 14 })
  phone: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @ManyToOne(() => User, (user) => user.contacts)
  user: User
}

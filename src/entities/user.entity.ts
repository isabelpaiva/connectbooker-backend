import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Schedule } from './schedule.entitie'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column()
  phone: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @OneToMany(() => Schedule, (schedule) => schedule.user, { cascade: true })
  contacts: Schedule[]
}

export { User }

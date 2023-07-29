import { DataSource, DataSourceOptions } from 'typeorm'
import path from 'node:path'
import 'dotenv/config'
import { User } from './entities/user.entity'
import { Schedule } from './entities/schedule.entitie'

const DataSourceConfig = (): DataSourceOptions => {
  const migrationsPath = path.join(__dirname, 'migration/**.{js,ts}')

  if (!process.env.DATABASE_URL) {
    throw new Error('Env var DATABASE_URL does not exists')
  }

  return {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [Schedule, User],
    migrations: [migrationsPath],
  }
}

const AppDataSource: DataSource = new DataSource(DataSourceConfig())

export { AppDataSource }

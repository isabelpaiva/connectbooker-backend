import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { TUserResponse } from '../../interfaces/users.interfaces'
import { userSchemaResponse } from '../../schemas/users.schemas'

const listUsersService = async (): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User)

  const users = await userRepository.find()

  const usersResponse = users.map((user) => userSchemaResponse.parse(user))

  return usersResponse
}

export { listUsersService }

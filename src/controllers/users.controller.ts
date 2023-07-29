import { Response, Request } from 'express'
import { createUserService } from '../services/users/createUser.service'
import { listUsersService } from '../services/users/getAllUsers.service'
import { updateUserService } from '../services/users/updateUser.service'
import { deleteUserService } from '../services/users/deleteUser.service'
import { getUserByIdService } from '../services/users/getUser.service'

export const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body)
  return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService()
  return res.status(200).json(users)
}

export const listUserByIdController = async (req: Request, res: Response) => {
  const userId = req.params.id
  const user = await getUserByIdService(userId)

  return res.status(200).json(user)
}

export const updateUserController = async (req: Request, res: Response) => {
  const response = await updateUserService(req.params.id, req.body)
  return res.status(200).json(response)
}

export const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.params.id)
  return res.status(204).json({})
}

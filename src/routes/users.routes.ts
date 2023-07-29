import { Router } from 'express'
import {
  createUserController,
  deleteUserController,
  listUserByIdController,
  listUsersController,
  updateUserController,
} from '../controllers/users.controller'
import { ensureDataIsValid } from '../middlewares/ensureDataIsValid.middleware'
import { userSchemaRequest } from '../schemas/users.schemas'
import { verifyUserExists } from '../middlewares/ensureUserExistsMiddleware'

export const userRoutes = Router()
userRoutes.post('/', ensureDataIsValid(userSchemaRequest), createUserController)
userRoutes.get('/', listUsersController)

userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)
userRoutes.get('/profile/:id', listUserByIdController)

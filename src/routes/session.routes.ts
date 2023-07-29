import { Router } from 'express'
import { createTokenController } from '../controllers/login.controller'
import { verifyLoginCredentials } from '../middlewares/ensureLoginIsValid.middleware'

export const sessionRoutes = Router()

sessionRoutes.post('/', verifyLoginCredentials, createTokenController)

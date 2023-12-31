import { Response, Request } from 'express'
import { createTokenService } from '../services/login/createToken.service'

export const createTokenController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const token = await createTokenService({ email, password })
  return res.json({ token })
}

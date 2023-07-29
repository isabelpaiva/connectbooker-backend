import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities/user.entity'

const userRepository = AppDataSource.getRepository(User)

export const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.body.email) {
    const email = await userRepository.findOne({
      where: { email: req.body.email },
    })

    if (email) {
      return res.status(409).json({ message: 'Email already exists.' })
    }
  }
  return next()
}

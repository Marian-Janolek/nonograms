import User, { UserInput } from '../models/User';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error('Please provide all values');
  }

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new Error('Email already exist');
  }
  const user = await User.create<UserInput>({ name, email, password });

  res.status(StatusCodes.CREATED).json({ user });
};

export { register };

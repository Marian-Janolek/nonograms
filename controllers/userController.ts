import User, { UserInput } from '../models/User';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error('Please provide all values');
  }
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const isAdmin = isFirstAccount ? true : false;

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new Error('Email already exist');
  }
  const user = await User.create<UserInput>({ name, email, password, isAdmin });

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    },
  });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error('Please provide all values!');
  }
  let user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new Error('Invalid credentials!');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Error('Invalid credentials!');
  }

  user.password = '';

  res.status(StatusCodes.OK).json({ user });
};

const update = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User does not exists!');
  }
  user.email = email;
  user.name = name;
  user.password = password;

  await user.save();

  res.status(StatusCodes.OK).json({ user });
};

export { register, login, update };

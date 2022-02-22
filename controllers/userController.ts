import User, { UserInput } from '../models/User';
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { UserLoginI } from '../models/models';

const register = async (req: Request<{}, {}, UserInput>, res: Response) => {
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

  const token = user.createJWT();

  // @ts-ignore
  user.password = undefined;

  res.status(StatusCodes.CREATED).json({
    user,
    token,
  });
};

const login = async (req: Request<{}, {}, UserLoginI>, res: Response) => {
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

  const token = user.createJWT();
  // @ts-ignore
  user.password = undefined;

  res.status(StatusCodes.OK).json({ user, token });
};

const updateUser = async (req: Request<{}, {}, UserInput>, res: Response) => {
  const { email, name } = req.body;

  const user = await User.findOne({ _id: req.user.userId });
  if (!user) {
    throw new Error('User does not exists!');
  }
  user.email = email;
  user.name = name;

  await user.save();
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token });
};

export { register, login, updateUser };

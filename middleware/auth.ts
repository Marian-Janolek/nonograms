import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IUserRequest extends Request {
  user: any;
}

const authenticateUser = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new Error('Authentification invalid');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);

    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new Error('Authentification invalid');
  }
};

export default authenticateUser;

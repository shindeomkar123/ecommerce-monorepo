import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { generateToken } from '../utils/jwt.util';

export const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  return res.status(200).json({ token: generateToken(user) });
};

export const handleRegisterUser = async (req: Request, res: Response) => {
  const { email, password, name, role } = req.body;
  await User.create({ email, password, name, role });
  return res.status(201).json({ message: 'User created' });
};

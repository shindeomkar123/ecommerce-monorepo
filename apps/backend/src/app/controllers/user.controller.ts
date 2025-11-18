import { Request, Response } from 'express';
import { User } from '../models/user.model';

export const getUserProfile = async (req: Request, res: Response) => {
  const user = User.findOne();
  res.send(user);
};

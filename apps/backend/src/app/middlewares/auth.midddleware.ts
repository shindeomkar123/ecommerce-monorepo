import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.util';

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader.startsWith('Bearer')) {
      const token = authHeader.split(' ')[1]; // token
      if (!token) throw new Error('Error');

      const verified = verifyToken(token, 'mysecret');
      if (!verified) throw new Error('Error');
      next();
    }
  } catch (error) {
    return res.status(401).json({ error });
  }
};

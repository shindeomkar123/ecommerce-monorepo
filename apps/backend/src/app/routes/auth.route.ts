import { Router } from 'express';
import {
  handleLogin,
  handleRegisterUser,
} from '../controllers/auth.controller';

export const authRouter = Router();

authRouter.post('/login', handleLogin);

authRouter.post('/register', handleRegisterUser);

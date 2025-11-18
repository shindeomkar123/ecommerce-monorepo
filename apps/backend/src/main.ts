/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { connectDb } from './app/config/db.config';
import { authRouter } from './app/routes/auth.route';

const app = express();
connectDb()
  .then(() => {
    console.log('Conneced to mongo db....');
  })
  .catch(() => {
    console.log('Failed to connect...');
  });

app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/auth', authRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

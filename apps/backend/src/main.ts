/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { connectDb } from './app/config/db.config';
import { authRouter } from './app/routes/auth.route';
import { productRouter } from './app/routes/product.route';
import cors from 'cors';

const app = express();
connectDb()
  .then(() => {
    console.log('Conneced to mongo db....');
  })
  .catch(() => {
    console.log('Failed to connect...');
  });

app.use(express.json());
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/products', productRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

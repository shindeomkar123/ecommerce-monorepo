import { Router } from 'express';
import { addProducts, getProducts } from '../controllers/products.controller';

export const productRouter = Router();

productRouter.route('/').get(getProducts).post(addProducts);

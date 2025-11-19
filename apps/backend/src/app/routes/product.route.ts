import { Router } from 'express';
import {
  addProducts,
  getProducts,
  getProductDetails,
} from '../controllers/products.controller';

export const productRouter = Router();

productRouter.route('/').get(getProducts).post(addProducts);

productRouter.get('/:productId', getProductDetails);

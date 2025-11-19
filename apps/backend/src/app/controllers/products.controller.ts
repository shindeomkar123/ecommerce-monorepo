import { Request, Response } from 'express';
import { Product } from '../models/products.model';

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

export const addProducts = async (req: Request, res: Response) => {
  const { title, description, price, currency, images, attribute } = req.body;
  await Product.create({
    title,
    description,
    price,
    currency,
    images,
    attribute,
  });
  res.status(201).json({ message: 'Added successfully' });
};

export const getProductDetails = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404).json({ message: 'Product not available' });
  }
  return res.status(200).json(product);
};

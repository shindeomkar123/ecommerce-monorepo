import { model, Schema } from 'mongoose';

const CartSchema = new Schema({
  user: { type: Object, ref: 'User' },
  items: [{ product: Object, qty: Number, price: Number }],
  updatedAt: Date,
});

export const Cart = model('cart', CartSchema);

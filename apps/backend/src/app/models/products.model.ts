import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  currency: { type: String, default: 'INR' },
  images: [String],
  attribute: Schema.Types.Mixed,
});

export const Product = model('product', ProductSchema);

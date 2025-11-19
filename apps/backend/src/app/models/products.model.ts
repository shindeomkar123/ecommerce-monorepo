import { model, Schema } from 'mongoose';

const ProductSchema = new Schema({
  id: String,
  title: String,
  description: String,
  price: Number,
  currency: { type: String, default: 'INR' },
  images: [String],
  attribute: Schema.Types.Mixed,
});

ProductSchema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

export const Product = model('product', ProductSchema);

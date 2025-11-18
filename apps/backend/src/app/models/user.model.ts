import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String },
  roles: [String],
});

export const User = model('user', UserSchema);

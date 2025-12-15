import { connect } from 'mongoose';

export const connectDb = async () => {
  return await connect(process.env.MONGO_URL);
};

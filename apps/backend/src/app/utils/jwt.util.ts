import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  const token = jwt.sign({ userId: user._id, email: user.email }, 'mysecrete');
  return token;
};

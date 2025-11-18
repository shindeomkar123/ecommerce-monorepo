import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  const token = jwt.sign({ userId: user._id, email: user.email }, 'mysecrete');
  return token;
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};

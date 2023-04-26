import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../interfaces/users.interface';

const secret = process.env.JWT_SECRET || '';

const generateToken = (user: User) => {
  const payload = { id: user.id,
    username: user.username, 
    vocation: user.vocation,
    level: user.level };
  return jwt.sign(payload, secret);
};

const verifyToken = (token:string): JwtPayload | boolean | string => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return false;
  }
};

const isTokenValid = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const isValidToken = verifyToken(token);
  if (!isValidToken) return res.status(401).json({ message: 'Invalid token' });
  return next();
};

export {
  generateToken,
  verifyToken,
  isTokenValid,
};
import jwt from 'jsonwebtoken';
import { User } from '../interfaces/users.interface';

const secret = process.env.JWT_SECRET || '';

const generateToken = (user: User) => {
  const payload = { id: user.id,
    username: user.username, 
    vocation: user.vocation,
    level: user.level };
  return jwt.sign(payload, secret);
};

export default {
  generateToken,
};
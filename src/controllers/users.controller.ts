import { Request, Response } from 'express';
import UserService from '../services/user.service';

const insertUser = async (req: Request, res: Response) => {
  const { statusCode, response } = await UserService.insertUser(req.body);
  return res.status(statusCode).json(response);
};

export default {
  insertUser,
};
import { Request, Response } from 'express';
import UserService from '../services/user.service';

const insertUser = async (req: Request, res: Response) => {
  const result = await UserService.insertUser(req.body);
  return res.status(201).json(result);
};

// const getAllProducts = async (req: Request, res: Response) => {
//   const result = await ProductService.getAllProducts();
//   return res.status(200).json(result);
// };

export default {
  insertUser,
};
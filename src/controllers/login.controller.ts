import { Request, Response } from 'express';
import LoginService from '../services/login.service';

const userLogin = async (req: Request, res: Response) => {
  const { statusCode, response } = await LoginService.userLogin(req.body);
  return res.status(statusCode).json(response);
};

// const getAllProducts = async (req: Request, res: Response) => {
//   const result = await ProductService.getAllProducts();
//   return res.status(200).json(result);
// };

export default {
  userLogin,
};
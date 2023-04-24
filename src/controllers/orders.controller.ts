import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

// const insertProduct = async (req: Request, res: Response) => {
//   const result = await ProductService.insertProduct(req.body);
//   return res.status(201).json(result);
// };

const getAllOrders = async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrders();
  return res.status(200).json(result);
};

export default {
  getAllOrders,
};
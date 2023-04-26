import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

const getAllOrders = async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrders();
  return res.status(200).json(result);
};

const createOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const { authorization } = req.headers;
  
  if (typeof authorization !== 'string') {
    throw new Error('Authorization header is missing or invalid');
  }
  
  const { statusCode, response } = await OrderService.createOrder(productsIds, authorization);
  return res.status(statusCode).json(response);
};

export default {
  getAllOrders,
  createOrder,
};
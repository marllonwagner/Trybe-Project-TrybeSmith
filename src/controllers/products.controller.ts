import { Request, Response } from 'express';
import ProductService from '../services/products.service';

const insertProduct = async (req: Request, res: Response) => {
  const result = await ProductService.insertProduct(req.body);
  return res.status(201).json(result);
};

export default {
  insertProduct,
};
import { Request, Response } from 'express';
import ProductService from '../services/products.service';

const insertProduct = async (req: Request, res: Response) => {
  const { statusCode, response } = await ProductService.insertProduct(req.body);
  return res.status(statusCode).json(response);
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts();
  return res.status(200).json(result);
};

export default {
  insertProduct,
  getAllProducts,
};
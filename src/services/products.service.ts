import ProductModel from '../models/products.model';
import { InsertedProduct } from '../interfaces/products.interface';

const insertProduct = async (insertedObj: InsertedProduct) => {
  if (!insertedObj.name) {
    return { statusCode: 400, response: { message: '"name" is required' } };
  }
  if (!insertedObj.amount) {
    return { statusCode: 400, response: { message: '"amount" is required' } };
  }
  const result = await ProductModel.insertProduct(insertedObj);
  return { statusCode: 201, response: result };
};

const getAllProducts = async () => {
  const [result] = await ProductModel.getAllProducts();
  return result;
};
export default {
  insertProduct,
  getAllProducts,
};
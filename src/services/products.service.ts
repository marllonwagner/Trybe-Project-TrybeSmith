import ProductModel from '../models/products.model';
import { InsertedProduct } from '../interfaces/products.interface';

const insertProduct = async (insertedObj: InsertedProduct) => {
  const result = await ProductModel.insertProduct(insertedObj);
  return result;
};
const getAllProducts = async () => {
  const [result] = await ProductModel.getAllProducts();
  return result;
};
export default {
  insertProduct,
  getAllProducts,
};
import ProductModel from '../models/products.model';
import { InsertedProduct } from '../interfaces/products.interface';

const insertProduct = async (insertedObj: InsertedProduct) => {
  const result = await ProductModel.insertProduct(insertedObj);
  return result;
};

export default {
  insertProduct,
};
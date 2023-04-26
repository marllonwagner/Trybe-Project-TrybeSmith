import { verifyToken } from '../auth/jwt';
import OrderModel from '../models/order.model';
import ProductModel from '../models/products.model';

const getAllOrders = async () => {
  const result = await OrderModel.getAllOrders();
  return result;
};

const createOrder = async (productsIds: [], authorizarion: string) => {
  if (!productsIds) {
    return { statusCode: 400,
      response: { message: '"productsIds" is required' } };
  }
  const token = verifyToken(authorizarion);
  if (typeof token === 'object' && token.id) {
    const { id } = token;
    const orderId = await OrderModel.createOrder(id);
    Promise.all(productsIds.map(async (p) => ProductModel.createOrders(orderId, p)));
    return { statusCode: 201, response: { userId: id, productsIds } };
  } 
  throw new Error('Invalid token');
};

export default {
  getAllOrders,
  createOrder,
};
import OrderModel from '../models/order.model';

// const insertProduct = async (insertedObj: InsertedProduct) => {
//   const result = await OrderModel.insertProduct(insertedObj);
//   return result;
// };
const getAllOrders = async () => {
  const result = await OrderModel.getAllOrders();
  return result;
};
export default {
  getAllOrders,
};
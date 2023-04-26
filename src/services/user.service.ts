import UserModel from '../models/user.model';
import { User } from '../interfaces/users.interface';
import { generateToken } from '../auth/jwt';

const insertUser = async (insertedUser: User) => {
  const id = await UserModel.insertUser(insertedUser);
  const token = generateToken({ ...insertedUser, id });
  return { token };
};
// const getAllProducts = async () => {
//   const [result] = await ProductModel.getAllProducts();
//   return result;
// };
export default {
  insertUser,
};
import UserModel from '../models/user.model';
import { User } from '../interfaces/users.interface';
import auth from '../auth/jwt';

const insertUser = async (insertedUser: User) => {
  const id = await UserModel.insertUser(insertedUser);
  const token = auth.generateToken({ ...insertedUser, id });
  return { token };
};
// const getAllProducts = async () => {
//   const [result] = await ProductModel.getAllProducts();
//   return result;
// };
export default {
  insertUser,
};
import UserModel from '../models/user.model';
import { UserLogin } from '../interfaces/login.interface';
import { generateToken } from '../auth/jwt';

const userLogin = async (login: UserLogin) => {
  const userObj = await UserModel.getUser(login);
  if (!userObj) {
    return { statusCode: 401, response: { message: 'Username or password invalid' } };
  }
  const token = generateToken(userObj);
  return { statusCode: 200, response: { token } };
};
// const getAllProducts = async () => {
//   const [result] = await ProductModel.getAllProducts();
//   return result;
// };
export default {
  userLogin,
};
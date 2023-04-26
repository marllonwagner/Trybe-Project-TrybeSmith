import UserModel from '../models/user.model';
import { User } from '../interfaces/users.interface';
import { generateToken } from '../auth/jwt';

const insertUser = async (insertedUser: User) => {
  if (!insertedUser.username) {
    return { statusCode: 400, response: { message: '"username" is required' } };
  }
  if (!insertedUser.level) {
    return { statusCode: 400, response: { message: '"level" is required' } };
  }
  if (!insertedUser.password) {
    return { statusCode: 400, response: { message: '"password" is required' } };
  }
  if (!insertedUser.vocation) {
    return { statusCode: 400, response: { message: '"vocation" is required' } };
  }
  const id = await UserModel.insertUser(insertedUser);
  const token = generateToken({ ...insertedUser, id });
  return { statusCode: 201, response: { token } };
};
export default {
  insertUser,
};
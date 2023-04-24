import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/users.interface';

const insertUser = async (insertedUser: User) => {
  const { username, vocation, level, password } = insertedUser;
  const query = `
  INSERT INTO Trybesmith.users(username,vocation,level,password)
  VALUES(?,?,?,?);
`;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [username, vocation, 
    level, password]);
  return insertId;
};

// const getAllProducts = async () => {
//   const query = 'SELECT * FROM Trybesmith.products';
//   const result = await connection.execute(query);
//   return result;
// };

export default {
  insertUser,
};
import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/users.interface';
import { UserLogin } from '../interfaces/login.interface';

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

const getUser = async (login:UserLogin) => {
  const query = `SELECT id, username, vocation, 
  level FROM Trybesmith.users WHERE username = ? AND password = ?;`;
  const [result]:any = await connection.execute(query, [login.username, login.password]);
  return result[0];
};

export default {
  insertUser,
  getUser,
};
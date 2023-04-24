import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/users.interface';
import { UserLogin } from '../interfaces/login.interface';

type User2 = {
  id:number
  username:string
  vocation:string
  level:number
  password:string
};

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

const getUser = async (login:UserLogin): Promise<User2> => {
  const query = `SELECT id, username, vocation, 
  level FROM Trybesmith.users WHERE username = ? AND password = ?;`;
  const [result] = await connection
    .execute<RowDataPacket[] | RowDataPacket[][]>(query, [login.username, login.password]);
  return result[0] as User2;
};

export default {
  insertUser,
  getUser,
};
import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InsertedProduct } from '../interfaces/products.interface';

const insertProduct = async (insertedObj: InsertedProduct) => {
  const { name, amount } = insertedObj;
  const query = `INSERT INTO Trybesmith.products(name,amount)
    VALUES(?,?);
  `;
  const [id] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id, name, amount };
};

const getAllProducts = async () => {
  const query = 'SELECT * FROM Trybesmith.products';
  const result = await connection.execute(query);
  return result;
};

export default {
  insertProduct,
  getAllProducts,
};
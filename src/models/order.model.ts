// import { ResultSetHeader } from 'mysql2';
import connection from './connection';

// const insertProduct = async (insertedObj: InsertedProduct) => {
//   const { name, amount } = insertedObj;
//   const query = `INSERT INTO Trybesmith.products(name,amount)
//     VALUES(?,?);
//   `;
//   const [id] = await connection.execute<ResultSetHeader>(query, [name, amount]);
//   return { id, name, amount };
// };

const getAllOrders = async () => {
  const query = `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds 
  FROM Trybesmith.orders AS o 
  INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
  GROUP BY o.id`;
  const [result] = await connection.execute(query);
  return result;
};

export default {
  getAllOrders,
};
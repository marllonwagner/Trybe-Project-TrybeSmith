import express from 'express';
import ProductsController from './controllers/products.controller';
import UsersController from './controllers/users.controller';
import OrdersController from './controllers/orders.controller';

const app = express();

app.use(express.json());

app.post('/products', ProductsController.insertProduct);
app.post('/users', UsersController.insertUser);

app.get('/products', ProductsController.getAllProducts);
app.get('/orders', OrdersController.getAllOrders);

export default app;

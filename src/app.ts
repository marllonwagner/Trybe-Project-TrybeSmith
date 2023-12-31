import express from 'express';
import ProductsController from './controllers/products.controller';
import UsersController from './controllers/users.controller';
import OrdersController from './controllers/orders.controller';
import loginController from './controllers/login.controller';
import { isLoginFieldsValid, isProductFieldsValid } from './middlewares/userLogin.validations';
import isUserFieldsValid from './middlewares/userCreate.validations';
import { isTokenValid } from './auth/jwt';
import isOrderFieldsValid from './middlewares/orderCreate.validatios';

const app = express();

app.use(express.json());

app.post('/products', isProductFieldsValid, ProductsController.insertProduct);
app.post('/users', isUserFieldsValid, UsersController.insertUser);
app.post('/login', isLoginFieldsValid, loginController.userLogin);
app.post('/orders', isTokenValid, isOrderFieldsValid, OrdersController.createOrder);

app.get('/products', ProductsController.getAllProducts);
app.get('/orders', OrdersController.getAllOrders);

export default app;

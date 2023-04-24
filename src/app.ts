import express from 'express';
import ProductsController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', ProductsController.insertProduct);

app.get('/products', ProductsController.getAllProducts);

export default app;

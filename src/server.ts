import express from 'express';
import { UserRouter } from './routeController/userRoutes';
import { TodoRouter } from './routeController/todoRoutes';

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(TodoRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

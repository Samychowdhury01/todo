import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { TodoRoutes } from './app/modules/todo/todo.routes';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/todos', TodoRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;

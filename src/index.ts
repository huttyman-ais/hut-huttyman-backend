import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { healthRouter } from './routes/health';
import { itemsRouter } from './routes/items';

const app = express();
app.use(cors());
app.use(express.json());
app.use(healthRouter);
app.use(itemsRouter);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Request failed:', err.name);
  res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
app.listen(port, () => {
  console.log(`hut-huttyman-backend listening on :${port}`);
});

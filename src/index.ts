
import 'dotenv/config'
import type { Request, Response } from 'express';
import express from 'express';
const app = express();

import { port } from './environment';

app.get('/', (_req: Request, res: Response) => {
  res.send({ data: 'Hello World!' });
});

app.listen(port);

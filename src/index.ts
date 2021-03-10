import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import './app/database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `🔥 Server started at http://localhost:${process.env.PORT || 3000}`
  )
);

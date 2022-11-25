import express, { Express, Request, Response } from 'express';
import cors from "cors";


const app: Express = express();
const port =3333

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
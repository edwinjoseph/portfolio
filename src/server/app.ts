import express, { Application, Request, Response } from 'express';

export default async function (): Promise<Application> {
  const app = express();

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello there!');
  });

  return app;
}

import express, { Application } from 'express';

// Routes
import homepage from './routes/homepage';

async function configureApp(app: Application): Promise<void> {
  homepage(app);
}

export default async function (): Promise<Application> {
  const app = express();
  await configureApp(app);
  return app;
}

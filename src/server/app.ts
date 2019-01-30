import express, { Application } from 'express';

// Express
import configureViewEngine from './express/configure-view-engine';

// Routes
import homepage from './routes/homepage';

async function configureApp(app: Application): Promise<void> {
  configureViewEngine(app);
  homepage(app);
}

export default async function (): Promise<Application> {
  const app = express();
  await configureApp(app);
  return app;
}

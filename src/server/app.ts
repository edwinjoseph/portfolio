import express, { Application } from 'express';

// Express
import configureViewEngine from './express/configure-view-engine';

// Routes
import homepage from './routes/homepage';

import errorHandler from './middleware/errorHandler';

async function configureApp(app: Application): Promise<void> {
  configureViewEngine(app);
  homepage(app);

  // This must be handled last!
  errorHandler(app);
}

export default async function (): Promise<Application> {
  const app = express();
  await configureApp(app);
  return app;
}

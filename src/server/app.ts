import express, { Application } from 'express';

// Express
import configureSSL from './express/configure-ssl';
import configureViewEngine from './express/configure-view-engine';
import configureStaticServer from './express/configure-static-server';

// Routes
import homepage from './routes/homepage';

import errorHandler from './middleware/error-handler';

async function configureApp(app: Application): Promise<void> {
  configureSSL(app);
  configureViewEngine(app);
  configureStaticServer(app);

  // Routes
  homepage(app);

  // This must be handled last!
  errorHandler(app);
}

export default async function (): Promise<Application> {
  const app = express();
  await configureApp(app);
  return app;
}

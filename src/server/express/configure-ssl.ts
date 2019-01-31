import { Application } from 'express';
import sslRedirect from 'heroku-ssl-redirect';

export default function (app: Application): void {
  app.use(sslRedirect());
}

import { Application } from 'express';
import path from 'path';

export default function (app: Application): void {
  app.set('view engine', 'pug');
  app.set('views', path.join(process.cwd(), 'src/server/views'));
}

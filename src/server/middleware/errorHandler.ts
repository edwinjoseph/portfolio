import { Application, Request, Response } from 'express';
import logger from '../../common/logger';
import { renderNotFound, renderServerError } from '../handlers/render-error';

function notFound(req: Request, res: Response): void {
  renderNotFound(res);
}

function serverError(error: Error, req: Request, res: Response): void {
  logger.error(error);
  renderServerError(res);
}

export default function (app: Application): void {
  app.use([ notFound, serverError ]);
}

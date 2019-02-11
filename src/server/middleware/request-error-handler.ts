import { NextFunction, Request, Response } from 'express';
import logger from '../../common/logger';

import cacheControl from './cache-control-handler';

import HTTPError from '../errors/HTTPError';
import renderError from '../handlers/render-error';

export default function (error: Error, req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    logger.error(error, 'Error encountered in middleware, but HTTP headers already sent');
    return next(error);
  }
  cacheControl.setToNever(res);

  if (error instanceof HTTPError) {
    // Don't logger 4xx errors (or lower).
    if (error.status >= 500) {
      logger.error(error);
    }
    renderError(res, error);
  } else {
    logger.error(error);
    // Don't send exception data to public
    res.status(500).send('Internal server error');
  }
}

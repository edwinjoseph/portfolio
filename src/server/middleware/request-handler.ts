import { NextFunction, Request, RequestHandler, Response } from 'express';
import requestErrorHandler from './request-error-handler';

export default function (fn: RequestHandler): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      return requestErrorHandler(error, req, res, next);
    }
  };
}

import { Response } from 'express';
import HTTPError from '../errors/HTTPError';

function renderBadRequest(res: Response, message: string = 'Reason Unknown'): void {
  res.status(400).render('errors/default', {
    pageTitle: '400 - Bad Request',
    message
  });
}

export function renderNotFound(res: Response): void {
  res.status(404).render('errors/default', {
    pageTitle: '404 - Page Not Found'
  });
}

// prettier-ignore
export function renderServerError(res: Response): void {
  res.status(500).render('errors/default', {
    pageTitle: '500 - Computer says no'
  });
}

export default function renderError(res: Response, error: HTTPError): void {
  switch (error.status) {
    case 400:
      return renderBadRequest(res, JSON.stringify(error, null, 2));
    case 404:
      return renderNotFound(res);
    default:
      return renderServerError(res);
  }
};

import { Request, Response } from 'express';

export default async function (model: any, req: Request, res: Response): Promise<void> {
  const html = '<p>Hello there!</p>';
  res.render('default', { model, html });
}

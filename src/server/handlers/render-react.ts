import { Request, Response } from 'express';
import { PageModel } from '../models/DefaultPageModel/types';

export default async function (pageModel: PageModel, req: Request, res: Response): Promise<void> {
  const model = pageModel.build(req);
  const html = '<p>Hello there!</p>'
  res.render('default', { model, html });
}

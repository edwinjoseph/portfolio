import { Request, Response } from 'express';
import render from '../../entry/server';
import { PageModel } from '../models/DefaultPageModel/types';

export default async function (pageModel: PageModel, req: Request, res: Response): Promise<void> {
  const model = pageModel.build(req);
  const html = render(req, model.client);
  res.render('default', { model, html });
}

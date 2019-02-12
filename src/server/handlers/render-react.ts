import { Request, Response } from 'express';
import render from '../../entry/server';
import getAsset from '../lib/express/assets';
import { PageModel } from '../models/DefaultPageModel/types';

export default async function (pageModel: PageModel, req: Request, res: Response): Promise<void> {
  const model = pageModel.build(req);
  const html = render(req, model.client);
  const assets = getAsset({ scripts: ['/bundle.js'], styles: ['/bundle.css'] });

  assets.styles.forEach((file: string) => res.append('Link', `<${file}>; as=style; rel=preload`));
  assets.scripts.forEach((file: string) => res.append('Link', `<${file}>; as=script; rel=preload`));

  res.render('default', { model, html, ...assets });
}

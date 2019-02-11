import { IRouter, Request, Response } from 'express';
import wrapRequestHandler from '../middleware/request-handler';

import render from '../handlers/render-react';
import getDefaultPageModel from '../operations/get-default-page-model';

export default function (route: IRouter<never>): void {
  route.get('/', wrapRequestHandler(async (req: Request, res: Response) => {
    const model = await getDefaultPageModel(req);
    await render(model, req, res);
  }));
}

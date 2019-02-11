import { IRouter, Request, Response } from 'express';
import wrapRequestHandler from '../middleware/requestHandler';
import render from '../handlers/render-react';

export default function (route: IRouter<never>): void {
  route.get('/', wrapRequestHandler(async (req: Request, res: Response) => {
    const model = {
      head: {
        title: 'homepage',
      },
    };
    await render(model, req, res);
  }));
}

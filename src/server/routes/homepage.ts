import { IRouter, Request, Response } from 'express';
import wrapRequestHandler from '../middleware/requestHandler';

export default function (route: IRouter<never>): void {
  route.get('/', wrapRequestHandler((req: Request, res: Response) => {
    res.render('default', {
      model: {
        head: {
          title: 'homepage',
        },
      },
      html: '<p>Hello there!</p>'
    });
  }));
}

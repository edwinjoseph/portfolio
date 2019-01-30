import { IRouter, Request, Response } from 'express';

export default function (route: IRouter<never>): void {
  route.get('/', (req: Request, res: Response) => {
    res.render('default', {
      pageTitle: 'Homepage',
      html: '<p>Hello there!</p>'
    });
  });
}

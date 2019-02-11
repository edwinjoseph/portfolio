import { Request } from 'express';
import UAParser from 'ua-parser-js';
import DefaultPageModel from '../models/DefaultPageModel';
import { PageModel } from '../models/DefaultPageModel/types';

export default async function (req: Request): Promise<PageModel> {
  return new DefaultPageModel()
    .setPath(req.path)
    .setRoute(req.params)
    .setUserAgent(new UAParser(req.get('user-agent')).getResult());
}

import { Request } from 'express';

import { renderToString } from 'react-dom/server';
import { Client } from '../../server/models/DefaultPageModel/types';
import renderServer from './Server';

export default function (req: Request, viewModel: Client): string {
  return renderToString(renderServer(req, viewModel));
}

import { Request } from 'express';

import * as React from 'react';
import * as ReactDOM from 'react-router';

import App from '../../client/view/App';

export default function (req: Request, model: any) {
  return (
    <ReactDOM.StaticRouter location={req.url} context={{}}>
      <App model={model} />
    </ReactDOM.StaticRouter>
  );
}

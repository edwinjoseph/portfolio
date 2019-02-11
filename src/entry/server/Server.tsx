import { Request } from 'express';

import * as React from 'react';
import * as ReactDOM from 'react-router';

function App(props: any) {
  return (
    <div>
      <p>Hello there!</p>
      <pre>
        {JSON.stringify(props.model, null, 2)}
      </pre>
    </div>
  );
}

export default function (req: Request, model: any) {
  return (
    <ReactDOM.StaticRouter location={req.url} context={{}}>
      <App model={model} />
    </ReactDOM.StaticRouter>
  );
}

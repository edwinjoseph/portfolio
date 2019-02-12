import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../client/view/App';

hydrate(
  <BrowserRouter>
    {/* Setting window as `any` because it was complaining that `model` didn't exist on it */}
    <App model={(window as any).model} />
  </BrowserRouter>,
  document.getElementById('app')
);

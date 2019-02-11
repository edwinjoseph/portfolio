import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Page from '../Layouts/Page';
import { configureDynamicLayout } from './DynamicLayout';

export default function Routes() {
  return (
    <Page>
      <Switch>
        <Route
          exact
          path='/'
          render={configureDynamicLayout('homepage')}
        />
      </Switch>
    </Page>
  );
}

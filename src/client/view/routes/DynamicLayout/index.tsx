import React from 'react';

import get from 'lodash/get';

import { RouteComponentProps } from 'react-router';
import constructComponent from './Slices';

export function configureDynamicLayout(pageId: string): (props: RouteComponentProps<any>) => React.ReactNode {
  return (props: RouteComponentProps<any>) => (
    <DynamicLayout {...props} pageId={pageId} />
  );
}

export default function DynamicLayout(props: any): JSX.Element {
  const slices = get(props.model, 'cms.page.slices', []);
  return (
    <main
      className='wrapper'
      id={props.pageId}>
      {slices.map(constructComponent)}
    </main>
  );
}

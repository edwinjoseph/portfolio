import React from 'react';
import SliceErrorBoundary from '../../../components/SliceErrorBoundary';
import { Components } from './types';

const components: Components = {};

export default function constructComponent(slice: any, index: number): JSX.Element | void {
  const type = slice.type;
  const Component = components[type];
  if (!Component) {
    return;
  }
  return (
    <SliceErrorBoundary key={`${type}_${index}`}>
      <div>
        <pre>{JSON.stringify(slice, null, 2)}</pre>
      </div>
    </SliceErrorBoundary>
  );
}

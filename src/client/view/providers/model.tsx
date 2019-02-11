import React from 'react';

export const { Consumer: ModelConsumer, Provider: ModelProvider } = React.createContext({});

export function withModel(Component: any) {
  return (props: any) => (
    <ModelConsumer>
      {(model) => <Component {...props} model={model} />}
    </ModelConsumer>
  );
}

import * as React from 'react';
import { ModelProvider } from './providers/model';
import Routes from './routes';

class App extends React.Component<any, {}> {
  public render() {
    const props = this.props;
    return (
      <ModelProvider value={props.model}>
        <Routes />
        <pre>
          {JSON.stringify(props.model, null, 2)}
        </pre>
      </ModelProvider>
    );
  }
}

export default App;

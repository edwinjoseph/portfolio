import React, { Component, ErrorInfo } from 'react';
import logger from '../../../../common/logger';

export default class SliceErrorBoundary extends Component {
  public state = {
    hasError: false
  };

  public componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true });
    logger.error(error, JSON.stringify(info));
  }

  public render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

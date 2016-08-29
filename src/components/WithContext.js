import React from 'react';

export default class WithContext extends React.Component {
  static childContextTypes = {
    rowModel: React.PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      rowModel: this.props.model
    };
  }

  render() {
    return this.props.children;
  }
}

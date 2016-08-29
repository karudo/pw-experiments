import React from 'react';

export default class Value extends React.Component {
  static contextTypes = {
    rowModel: React.PropTypes.object.isRequired
  };
  render() {
    return <span>{this.context.rowModel[this.props.prop]}</span>;
  }
}

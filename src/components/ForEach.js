import React from 'react';

import WithContext from './WithContext';

export default class ForEach extends React.Component {
  static defaultProps = {
    wrap: 'div'
  };
  render() {
    return (
      <this.props.wrap>
        {this.props.collection.map((model, i) => {
          return (
            <WithContext model={model} key={i}>
              {this.props.children}
            </WithContext>
          );
        })}
      </this.props.wrap>
    )
  }
}

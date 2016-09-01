import React from 'react';

import {connect} from 'react-redux';
import storeShape from 'react-redux/lib/utils/storeShape';


class ModelPage extends React.Component {
  render() {
    console.log(this.props);
    return <div onClick={() => this.props.dispatch({type: 'INC'})}>inc-inc-inc</div>;
  }
}

class OurModel {
  constructor(state) {
    this.state = state;
  }
  set(obj) {
    this.state = {
      ...this.state,
      ...obj
    };
  }
  get(prp) {
    return this.state[prp];
  }
}

function uberConnect() {
  return function wrapWithUberConnect(WrappedComponent) {
    class UberConnect extends React.Component {
      static contextTypes = {
        store: storeShape
      };
      constructor(props, context) {
        super(props, context);
        this.store = props.store || context.store;
        this.state = {storeState: this.store.getState()};
      }

      render() {
        return <WrappedComponent/>;
      }
    }

    return UberConnect;
  };
}

export default connect(
  state => {
    console.log(state);
    return {};
  },
  false,
  (q, w, e) => {
    console.log(1, q, 2, w, 3, e);
    return {...w};
  }
)(ModelPage);

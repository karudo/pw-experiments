import React from 'react';
import {isEqual} from 'lodash';

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

      componentDidMount() {
        this.trySubscribe();
      }

      componentWillReceiveProps(nextProps) {
        if (!isEqual(nextProps, this.props)) {
          this.haveOwnPropsChanged = true;
        }
      }

      componentWillUnmount() {
        this.tryUnsubscribe();
        this.clearCache();
      }

      trySubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
          this.handleChange();
        }
      }

      tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      }

      handleChange() {
        if (!this.unsubscribe) {
          return;
        }

        const storeState = this.store.getState();
        const prevStoreState = this.state.storeState;
        if (prevStoreState === storeState) {
          return;
        }

        if (!this.doStatePropsDependOnOwnProps) {
          const haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this)
          if (!haveStatePropsChanged) {
            return
          }
          if (haveStatePropsChanged === errorObject) {
            this.statePropsPrecalculationError = errorObject.value
          }
          this.haveStatePropsBeenPrecalculated = true
        }

        this.hasStoreStateChanged = true
        this.setState({ storeState })

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

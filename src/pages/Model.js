import React from 'react';

import {connect} from 'react-redux';


class ModelPage extends React.Component {
  render() {
    console.log(this.props);
    return <div onClick={e => this.props.dispatch({type: 'INC'})}>190</div>;
  }
}

export default connect(
  state => {
    console.log(state);
    return {};
  },
  dispatch => ({dispatch}),
  (q, w, e) => {
    console.log(1, q, 2, w, 3, e);
    return {...w};
  }
)(ModelPage);

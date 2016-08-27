import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './actions/counter';

function Second(props) {
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>-</button>
      counter: {props.counter}
    </div>
  );
}


export default connect(
  state => ({counter: state.counter}),
  {increment, decrement}
)(Second);

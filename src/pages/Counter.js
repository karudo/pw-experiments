import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions/counter';

function Counter(props) {
  return (
    <div>
      <button onClick={props.decrement}>-</button>
      counter: {props.counter}
      <button onClick={props.increment}>+</button>
    </div>
  );
}


export default connect(
  state => ({counter: state.counter}),
  {increment, decrement}
)(Counter);

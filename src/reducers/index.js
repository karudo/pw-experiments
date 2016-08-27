/* eslint-disable */
import {combineReducers} from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INC':
      state = state + 1;
      break;
    case 'DEC':
      state = state - 1;
      break;
  }
  return state;
}

export default combineReducers({counter});

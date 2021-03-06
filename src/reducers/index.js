/* eslint-disable operator-assignment, default-case */
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

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

function model(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_MODEL':
      state = {
        ...state,
        [action.modelName]: action.model
      };
      break;
  }
  return state;
}

export default combineReducers({
  counter,
  model,
  form: formReducer
});

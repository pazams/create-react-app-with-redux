import * as types from '../actions/action-types';

const initialState = {
    light: 'OFF',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LIGHT_ON:
      return Object.assign({}, state, {light: 'ON'});
    case types.LIGHT_OFF:
      return Object.assign({}, state, {light: 'OFF'});
    case types.LIGHT_DIM:
      return Object.assign({}, state, {light: 'DIM'});
    default:
      return state;
  }
};

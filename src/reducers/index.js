import bedroom from './bedroom.js';
import kitchen from './kitchen.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  bedroom,
  kitchen 
});

export default rootReducer;

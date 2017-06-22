import rootReducer from '../reducers';
import {createStore, compose} from 'redux';

// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, undefined, enhancers);

export default store;

import store from './store';

const handlers = [];

let currentState;
store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
  handlers.forEach(handler => handler(previousState, currentState));
});

export default (handler) => {
  handlers.push(handler);
};

export default (store, triggers) => {
  let currentState;
  store.subscribe(() => {
    const previousState = currentState;
    currentState = store.getState();
    triggers.forEach(trigger => trigger(store.dispatch, previousState, currentState));
  });
};

import store from '../store/store';
import repuke from '../store/repuke';
import * as kitchenActions from '../actions/kitchen';
const dispatch = store.dispatch;

repuke((previousState, currentState) => {
  if(!previousState || !previousState) return;

  const previousLight = previousState.bedroom.light;
  const currentLight = currentState.bedroom.light;

  if(previousLight==='OFF' && currentLight==='DIM') {
    dispatch(kitchenActions.onKettleFill());
    dispatch(kitchenActions.onKettleHeat());
  }
});

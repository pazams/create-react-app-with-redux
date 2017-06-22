import * as kitchenActions from '../actions/kitchen';

export default (dispatch, previousState, currentState) => {
  if(!previousState || !previousState) return;

  const previousLight = previousState.bedroom.light;
  const currentLight = currentState.bedroom.light;

  if(previousLight==='OFF' && currentLight==='DIM') {
    dispatch(kitchenActions.onKettleFill());
    dispatch(kitchenActions.onKettleHeat());
  }
};

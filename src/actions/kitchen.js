import * as types from './action-types';

export const onKettleFill = () => {
  alert('Filling the kettle');
  return {
    type: types.KETTLE_FILL
  };
}

export const onKettleHeat = () => {
  alert('Heating the kettle');
  return {
    type: types.KETTLE_HEAT
  };
}

export const onKettleDrink = () => {
  alert('yum!');
  return {
    type: types.KETTLE_DRINK
  };
}

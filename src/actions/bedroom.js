import * as types from './action-types';

export const onLightOn = (light) => {
  return {
    type: types.LIGHT_ON,
    light
  };
}

export const onLightOff = (light) => {
  return {
    type: types.LIGHT_OFF,
    light
  };
}


export const onLightDim = (light) => {
  return {
    type: types.LIGHT_DIM,
    light
  };
}


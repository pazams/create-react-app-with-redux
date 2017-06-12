import * as types from './action-types';

export const onLightOn = () => {
  return {
    type: types.LIGHT_ON
  };
}

export const onLightOff = () => {
  return {
    type: types.LIGHT_OFF
  };
}


export const onLightDim = () => {
  return {
    type: types.LIGHT_DIM
  };
}


import React, {PropTypes} from 'react';

const Bedroom = (props) => {

    const { 
      light, 
      onLightOn, 
      onLightOff, 
      onLightDim, 
    } = props;

    const style = {
      height: '150px',
      padding: '5px',
      backgroundColor: mapLightToColor(light),
    }

    return (

      <div style={style} >
        <h2 className='white'>Bedroom</h2>
        <span className='white'>Light switch: </span>
        <button onClick={onLightOn}> turn on </button>
        <button onClick={onLightDim}> dim </button>
        <button onClick={onLightOff}> turn off </button>

      </div>
    );

}

function mapLightToColor(light){
  switch (light) {
    case 'ON':
      return 'yellow';
    case 'OFF':
      return 'black';
    case 'DIM':
      return 'orange';
  }
}

Bedroom.propTypes = {
  light: PropTypes.string.isRequired,
  onLightOn: PropTypes.func.isRequired,
  onLightOff: PropTypes.func.isRequired,
  onLightDim: PropTypes.func.isRequired,
};


export default Bedroom;


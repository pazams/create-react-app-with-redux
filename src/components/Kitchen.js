import React, {PropTypes} from 'react';

const Kitchen = (props) => {

    const { 
      isKettleFilled,
      isKettleHeated,
      onKettleFill,
      onKettleHeat,
      onKettleDrink,
    } = props;


    return (

      <div className='room'>
        <h2>Kitchen</h2>
        <span>Kettle: </span>
        <button onClick={onKettleFill}> fill </button>
        <button 
          onClick={onKettleHeat}
          disabled={!isKettleFilled}
        >
          heat 
        </button>
        <button 
          onClick={onKettleDrink} 
          disabled={!isKettleHeated || !isKettleFilled}
        >
          drink
        </button>
      </div>

    );

}

Kitchen.propTypes = {
  isKettleFilled: PropTypes.bool.isRequired,
  isKettleHeated: PropTypes.bool.isRequired,
  onKettleFill: PropTypes.func.isRequired,
  onKettleHeat: PropTypes.func.isRequired,
  onKettleDrink: PropTypes.func.isRequired,
};

export default Kitchen;

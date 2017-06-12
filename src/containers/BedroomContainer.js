import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bedroomActions from '../actions/bedroom';
import * as kitchenActions from '../actions/kitchen';
import Bedroom from '../components/Bedroom';

function mapStateToProps(state, props) {
    return {
        light: state.bedroom.light
    };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(bedroomActions, dispatch);

  return {
      onLightOn: actions.onLightOn,
      onLightOff: actions.onLightOff,
      onLightDim: actions.onLightDim,
      onWakingUp: () => {
        dispatch(kitchenActions.onKettleFill());
        dispatch(kitchenActions.onKettleHeat());
      },
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Bedroom);

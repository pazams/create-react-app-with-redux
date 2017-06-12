import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as kitchenActions from '../actions/kitchen';
import Kitchen from '../components/Kitchen';

function mapStateToProps(state, props) {
    return {
        isKettleFilled: state.kitchen.isKettleFilled,
        isKettleHeated: state.kitchen.isKettleHeated,
    };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(kitchenActions, dispatch);
  return {
    onKettleFill: actions.onKettleFill,
    onKettleHeat: actions.onKettleHeat,
    onKettleDrink: actions.onKettleDrink,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);

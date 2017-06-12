import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions/people-actions';
import People from '../components/People';

function mapStateToProps(state, props) {
    return {
        people: state.people
    };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(peopleActions, dispatch);
  return {
      addPerson: actions.addPerson,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(People);

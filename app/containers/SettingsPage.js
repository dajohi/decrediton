// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Settings from '../components/Settings';
import * as SettingsActions from '../actions/SettingsActions';

function mapStateToProps(state) {
  return {
    someSettings: state.settings.someSettings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

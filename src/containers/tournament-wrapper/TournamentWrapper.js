import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTournamentPhases } from '../../modules/tournamentStatsWrapper/actions';

import TournamentStatsWrapper from '../../components/TournamentStatsWrapper';

const mapStateToProps = state => ({
  pointScheme: state.globalState.pointScheme,
  requestingPointScheme: state.globalState.requestingPointScheme,
  phases: state.globalState.phases,
  requestingPhases: state.globalState.requestingPhases,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTournamentPhases,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentStatsWrapper);
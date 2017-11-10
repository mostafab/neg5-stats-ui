import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTournamentPhases, setInitialPhaseOnLoad, getTournamentTossupValues,
  getTournamentInformation } from '../../modules/tournamentStatsWrapper/actions';

import TournamentStatsWrapper from '../../components/TournamentStatsWrapper';

const mapStateToProps = state => ({
  tossupValues: state.globalState.tossupValues,
  requestingPointScheme: state.globalState.requestingPointScheme,
  phases: state.globalState.phases,
  requestingPhases: state.globalState.requestingPhases,
  selectedPhaseId: state.globalState.selectedPhaseId,
  loadedTournament: state.globalState.loadedTournament,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTournamentPhases,
  setInitialPhaseOnLoad,
  getTournamentTossupValues,
  getTournamentInformation,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentStatsWrapper);
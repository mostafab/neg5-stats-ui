import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  requestFullTeamStandings,
} from '../../modules/fullTeamStandings/actions';

import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';

import TeamFullStandingsRoot from '../../components/teamFullStandings/TeamFullStandingsRoot';

const mapStateToProps = state => ({
  fullTeamStats: state.teamFullStandings.fullTeamStats,
  tossupValues: state.globalState.tossupValues,
  numTimesStatsReceived: state.teamFullStandings.numTimesStatsReceived,
  requestingFullTeamStandings: state.teamFullStandings.requestingFullTeamStandings,
  selectedPhaseId: state.globalState.selectedPhaseId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestFullTeamStandings,
  setInitialPhaseOnLoad,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamFullStandingsRoot);


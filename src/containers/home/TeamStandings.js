import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  requestTeamStandings,
  getTournamentBrackets,
} from '../../modules/teamStandings/actions';

import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';

import TeamStandingsRoot from '../../components/teamStandings/TeamStandingsRoot';

const mapStateToProps = state => ({
  allTeamStats: state.teamStandings.allTeamStats,
  pointScheme: state.globalState.pointScheme,
  brackets: state.teamStandings.brackets,
  requestingTeamStandings: state.teamStandings.requestingTeamStandings,
  selectedPhaseId: state.globalState.selectedPhaseId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestTeamStandings,
  getTournamentBrackets,
  setInitialPhaseOnLoad,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamStandingsRoot);


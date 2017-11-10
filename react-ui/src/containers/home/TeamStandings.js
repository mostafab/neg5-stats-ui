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
  tossupValues: state.globalState.tossupValues,
  brackets: state.teamStandings.brackets,
  requestingTeamStandings: state.teamStandings.requestingTeamStandings,
  selectedPhaseId: state.globalState.selectedPhaseId,
  numTimesStatsReceived: state.teamStandings.numTimesStatsReceived,
  tournamentInfo: state.globalState.loadedTournament,
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


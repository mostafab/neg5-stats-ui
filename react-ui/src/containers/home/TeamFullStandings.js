import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

import {
  requestFullTeamStandings,
} from '../../modules/fullTeamStandings/actions';

import { getIndividualStandings } from '../../modules/individualStandings/actions';

import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';

import TeamFullStandingsRoot from '../../components/teamFullStandings/TeamFullStandingsRoot';

const mapStateToProps = state => ({
  fullTeamStats: state.teamFullStandings.fullTeamStats,
  individualStatsByTeam: groupBy(state.individualStandings.individualStats, 'teamId'),
  tossupValues: state.globalState.tossupValues,
  numTimesStatsReceived: state.teamFullStandings.numTimesStatsReceived,
  requestingFullTeamStandings: state.teamFullStandings.requestingFullTeamStandings,
  selectedPhaseId: state.globalState.selectedPhaseId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestFullTeamStandings,
  setInitialPhaseOnLoad,
  getIndividualStandings,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamFullStandingsRoot);


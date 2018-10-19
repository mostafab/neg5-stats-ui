import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

import {
  requestFullTeamStandings,
} from '../../modules/fullTeamStandings/actions';

import { getIndividualStandings } from '../../modules/individualStandings/actions';

import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';
import { enrichIndividualStats } from '../../util/stats-util';

import TeamFullStandingsRoot from '../../components/teamFullStandings/TeamFullStandingsRoot';

const mapStateToProps = state => ({
  fullTeamStats: state.teamFullStandings.fullTeamStats,
  individualStatsByTeam: partitionIndividualStatsByTeam(state),
  tossupValues: state.globalState.tossupValues,
  numTimesStatsReceived: state.teamFullStandings.numTimesStatsReceived,
  requestingFullTeamStandings: state.teamFullStandings.requestingFullTeamStandings,
  selectedPhaseId: state.globalState.selectedPhaseId,
  tournamentInfo: state.globalState.loadedTournament,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestFullTeamStandings,
  setInitialPhaseOnLoad,
  getIndividualStandings,
}, dispatch);

function partitionIndividualStatsByTeam(state) {
  const stats = enrichIndividualStats(state.individualStandings.individualStats, state.globalState.teams, state.globalState.players);
  const players = state.globalState.players;
  const groups = groupBy(stats, stat => {
    const player = players[stat.playerId];
    if (!player) {
      return null;
    }
    return player.teamId;
  });
  return groups;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamFullStandingsRoot);


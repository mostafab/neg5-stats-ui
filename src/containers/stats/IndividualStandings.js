import { orderBy } from 'lodash';
import { connect } from 'react-redux';

import IndividualStandingsRoot from '../../components/individualStandings/IndividualStandingsRoot';

const mapStateToProps = state => {
  return {
    selectedPhaseId: state.globalState.selectedPhaseId,
    tossupValues: state.globalState.tossupValues,
    individualStats: enrichIndividualStats(state.individualStandings.individualStats, state.globalState.teams, state.globalState.players),
    requestingTeamStandings: state.individualStandings.requestingTeamStandings,
    numTimesStatsReceived: state.individualStandings.numTimesStatsReceived,
    tournamentInfo: state.globalState.loadedTournament,
    usesNegs: state.globalState.usesNegs,
  }
}

function enrichIndividualStats(stats, teams, players) {
  const results = stats.map(stat => {
    const player = players[stat.playerId];
    let playerName = null;
    let teamName = null;
    if (player) {
      playerName = player.name;
      teamName = teams[player.teamId] ? teams[player.teamId].name : null;
    }
    return {
      ...stat,
      playerName,
      teamName,
    }
  });
  return orderBy(results, ['ppg'], ['desc']).map((p, i) => ({...p, rank: i + 1}))
}

export default connect(
  mapStateToProps,
  null,
)(IndividualStandingsRoot);


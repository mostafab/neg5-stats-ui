import { connect } from 'react-redux';
import { orderBy } from 'lodash';

import TeamStandingsRoot from '../../components/teamStandings/TeamStandingsRoot';

const mapStateToProps = state => ({
  allTeamStats: enrichStandings(state.teamStandings.allTeamStats, state.globalState.teams, state.globalState.selectedPhaseId, state.globalState.loadedTournament.currentPhaseId),
  tossupValues: state.globalState.tossupValues,
  brackets: state.teamStandings.brackets,
  requestingTeamStandings: state.teamStandings.requestingTeamStandings,
  selectedPhaseId: state.globalState.selectedPhaseId,
  numTimesStatsReceived: state.teamStandings.numTimesStatsReceived,
  tournamentInfo: state.globalState.loadedTournament,
  usesNegs: state.globalState.usesNegs,
});

function enrichStandings(stats, teams, selectedPhaseId, currentPhaseId) {
  const orderedStats = orderBy(stats.map(teamStat => {
    let teamName = null;
    let team = null;
    if (teams[teamStat.teamId]) {
      team = teams[teamStat.teamId];
      teamName = team.name;
    }
    let divisionName = null;
    let divisionId = null;
    if (selectedPhaseId && team) {
      const matchingDivision = team.divisions.find(div => div.phaseId === selectedPhaseId);
      if (matchingDivision) {
        divisionName = matchingDivision.name;
        divisionId = matchingDivision.id;
      }
    } else if (currentPhaseId && team) {
      const matchingDivision = team.divisions.find(div => div.phaseId === currentPhaseId);
      if (matchingDivision) {
        divisionName = matchingDivision.name;
        divisionId = matchingDivision.id;
      }
    }
    return {
      ...teamStat,
      teamName,
      divisionName,
      divisionId,
    }
  }), ['winPercentage', 'ppb', 'ppg'], ['desc', 'desc', 'desc']);

  return orderedStats.map((stat, index) => ({ ...stat, rank: index + 1}))
}

export default connect(
  mapStateToProps,
)(TeamStandingsRoot);


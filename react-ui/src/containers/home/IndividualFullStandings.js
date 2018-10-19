import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { orderBy } from 'lodash';

import { requestFullIndividualStandings } from '../../modules/fullIndividualStandings/actions';
import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';

import IndividualFullStandingsRoot from '../../components/individualFullStandings/IndividualFullStandingsRoot';

const mapStateToProps = state => ({
  selectedPhaseId: state.globalState.selectedPhaseId,
  tossupValues: state.globalState.tossupValues,
  fullIndividualStats: enrichFullStandings(state.individualFullStandings.fullIndividualStats, state.globalState.teams, state.globalState.players),
  requestingFullIndividualStandings: state.individualFullStandings.requestingFullIndividualStandings,
  numTimesStatsReceived: state.individualFullStandings.numTimesStatsReceived,
  tournamentInfo: state.globalState.loadedTournament,
  usesNegs: state.globalState.usesNegs,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setInitialPhaseOnLoad,
  requestFullIndividualStandings,
}, dispatch);

function enrichFullStandings(fullStandings, teams, players) {
  return orderBy(fullStandings.map(playerStanding => {
    let playerName = null;
    let teamName = null;
    if (players[playerStanding.playerId]) {
      const player = players[playerStanding.playerId]
      playerName = player.name;
      
      if (teams[player.teamId]) {
        teamName = teams[player.teamId].name;
      }
    }
    return {
      ...playerStanding,
      playerName,
      teamName,
      matches: orderBy(playerStanding.matches.map(match => {
        let opponentTeamName = null;
        if (teams[match.opponentTeamId]) {
          opponentTeamName = teams[match.opponentTeamId].name;
        }
        return {
          ...match,
          opponentTeamName,
        }
      }), ['round'])
    }
  }), ['teamName']);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualFullStandingsRoot);


export const TEAM_STANDINGS_REQUESTED = 'teamStandings/TEAM_STANDINGS_REQUESTED';
export const TEAM_STANDINGS_RECEIVED = 'teamStandings/TEAM_STANDINGS_RECEIVED';
export const TEAM_STANDINGS_ERROR = 'teamStandings/TEAM_STANDINGS_ERROR';

export const requestTeamStandings = (tournamentId, phaseId) =>
  dispatch => {
    console.log(`Dispatching...`);
    dispatch({
      type: TEAM_STANDINGS_REQUESTED,
    });
  }
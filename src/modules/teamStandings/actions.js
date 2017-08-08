import { getTeamStandings } from '../../client/stats-client';

const ROOT = 'teamStandings/';

export const TEAM_STANDINGS_REQUESTED = `${ROOT}TEAM_STANDINGS_REQUESTED`;
export const TEAM_STANDINGS_RECEIVED = `${ROOT}TEAM_STANDINGS_RECEIVED`;
export const TEAM_STANDINGS_ERROR = `${ROOT}TEAM_STANDINGS_ERROR`;

export const requestTeamStandings = (tournamentId, phaseId) =>
  async dispatch => {
    dispatch({
      type: TEAM_STANDINGS_REQUESTED,
    });
    try {
      const teamStandings = await getTeamStandings(tournamentId, phaseId);
      console.log(teamStandings);
      dispatch({
        type: TEAM_STANDINGS_RECEIVED,
      });
    } catch (e) {
      dispatch({
        type: TEAM_STANDINGS_ERROR,
      });
    }
  }
import { getTeamStandings } from '../../client/stats-client';
import { mapTeamStandings } from './../../mappers/team-standings-mapper';

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
      // console.log(teamStandings);
      const mappedTeamStandings = mapTeamStandings(teamStandings.stats);
      // console.log(mappedTeamStandings);
      dispatch({
        type: TEAM_STANDINGS_RECEIVED,
        allTeamStats: mappedTeamStandings,
      });
    } catch (e) {
      dispatch({
        type: TEAM_STANDINGS_ERROR,
      });
    }
  }
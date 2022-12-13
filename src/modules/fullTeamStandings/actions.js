import { getFullTeamStandings } from '../../client/stats-client';
import { mapFullTeamStandings } from './../../mappers/team-standings-mapper';

const ROOT = 'teamFullStandings/';

export const TEAM_FULL_STANDINGS_REQUESTED = `${ROOT}TEAM_FULL_STANDINGS_REQUESTED`;
export const TEAM_FULL_STANDINGS_RECEIVED = `${ROOT}TEAM_FULL_STANDINGS_RECEIVED`;
export const TEAM_FULL_STANDINGS_ERROR = `${ROOT}TEAM_FULL_STANDINGS_ERROR`;

export const requestFullTeamStandings = (tournamentId, phaseId) =>
  async dispatch => {
    dispatch({
      type: TEAM_FULL_STANDINGS_REQUESTED,
    });
    try {
      const teamStandings = await getFullTeamStandings(tournamentId, phaseId);
      const mappedStandings = mapFullTeamStandings(teamStandings.teams);
      dispatch({
        type: TEAM_FULL_STANDINGS_RECEIVED,
        fullTeamStats: mappedStandings,
      });
    } catch (e) {
      dispatch({
        type: TEAM_FULL_STANDINGS_ERROR,
      });
    }
  }

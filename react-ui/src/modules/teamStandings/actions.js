import { getTeamStandings } from '../../client/stats-client';
import { mapTeamStandings } from './../../mappers/team-standings-mapper';

const ROOT = 'teamStandings/';

export const TEAM_STANDINGS_REQUESTED = `${ROOT}TEAM_STANDINGS_REQUESTED`;
export const TEAM_STANDINGS_RECEIVED = `${ROOT}TEAM_STANDINGS_RECEIVED`;
export const TEAM_STANDINGS_ERROR = `${ROOT}TEAM_STANDINGS_ERROR`;

export const BRACKETS_REQUESTED = `${ROOT}BRACKETS_REQUESTED`;
export const BRACKETS_RECEIVED = `${ROOT}BRACKETS_RECEIVED`;
export const BRACKETS_ERROR = `${ROOT}BRACKETS_ERROR`;

export const requestTeamStandings = (tournamentId, phaseId) =>
  async dispatch => {
    dispatch({
      type: TEAM_STANDINGS_REQUESTED,
    });
    try {
      const stats = await getTeamStandings(tournamentId, phaseId);
      const mappedTeamStandings = mapTeamStandings(stats.teamStandings);
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

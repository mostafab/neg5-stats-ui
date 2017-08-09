import tournamentClient from './../../client/tournament-client';
import { getTeamStandings } from '../../client/stats-client';
import { mapTeamStandings } from './../../mappers/team-standings-mapper';
import { mapBrackets } from './../../mappers/brackets-mapper';

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
      const teamStandings = await getTeamStandings(tournamentId, phaseId);
      const mappedTeamStandings = mapTeamStandings(teamStandings.stats);
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

export const getTournamentBrackets = tournamentId =>
  async dispatch => {
    dispatch({
      type: BRACKETS_REQUESTED,
    });
    try {
      const brackets = await tournamentClient.getTournamentBrackets(tournamentId);
      const mappedBrackets = mapBrackets(brackets);
      dispatch({
        type: BRACKETS_RECEIVED,
        brackets: mappedBrackets,
      });
    } catch (error) {
      dispatch({
        type: BRACKETS_ERROR,
      });
    }
  };

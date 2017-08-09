import tournamentClient from './../../client/tournament-client';
import { mapPhases } from './../../mappers/phase-mapper';

const ROOT = 'tournamentStatsWrapper/';

export const POINT_SCHEME_REQUESTED = `${ROOT}POINT_SCHEME_REQUESTED`;
export const POINT_SCHEME_RECEIVED = `${ROOT}POINT_SCHEME_RECEIVED`;
export const POINT_SCHEME_ERROR = `${ROOT}POINT_SCHEME_ERROR`;

export const PHASES_REQUESTED = `${ROOT}PHASES_REQUESTED`;
export const PHASES_RECEIVED = `${ROOT}PHASES_RECEIVED`;
export const PHASES_ERROR = `${ROOT}PHASES_ERROR`;

export const getTournamentPhases = tournamentId =>
  async dispatch => {
    dispatch({
      type: PHASES_REQUESTED,
    });
    try {
      const phases = await tournamentClient.getTournamentPhases(tournamentId);
      const mappedPhases = mapPhases(phases);
      dispatch({
        type: PHASES_RECEIVED,
        phases: mappedPhases,
      });
    } catch (error) {
      dispatch({
        type: PHASES_ERROR,
      });
    }
  };

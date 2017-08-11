import { push } from 'react-router-redux';

import tournamentClient from './../../client/tournament-client';
import { mapPhases } from './../../mappers/phase-mapper';
import { getPageUrlFromStatsPageAndPhase } from './../../util/url-util';

const ROOT = 'tournamentStatsWrapper/';

export const POINT_SCHEME_REQUESTED = `${ROOT}POINT_SCHEME_REQUESTED`;
export const POINT_SCHEME_RECEIVED = `${ROOT}POINT_SCHEME_RECEIVED`;
export const POINT_SCHEME_ERROR = `${ROOT}POINT_SCHEME_ERROR`;

export const PHASES_REQUESTED = `${ROOT}PHASES_REQUESTED`;
export const PHASES_RECEIVED = `${ROOT}PHASES_RECEIVED`;
export const PHASES_ERROR = `${ROOT}PHASES_ERROR`;

export const PHASE_CHANGE = `${ROOT}PHASE_CHANGE`;
export const INITIAL_PHASE_ON_LOAD = `${ROOT}INITIAL_PHASE_ON_LOAD`;

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

export const updateUrlWithPhase = (tournamentId, newPhaseId, url) =>
  async dispatch => {
    const newUrl = getPageUrlFromStatsPageAndPhase(tournamentId, newPhaseId, url);
    dispatch(push(newUrl));
    dispatch({
      type: PHASE_CHANGE,
      newUrl,
      newSelectedPhaseId: newPhaseId,
    });
  }

export const setInitialPhaseOnLoad = phaseId =>
  async dispatch => {
    dispatch({
      type: PHASE_CHANGE,
      newSelectedPhaseId: phaseId,
    });
  }

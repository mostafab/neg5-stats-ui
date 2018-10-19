import { push } from 'react-router-redux';

import tournamentClient from './../../client/tournament-client';
import teamClient from './../../client/team-client';
import { mapPhases } from './../../mappers/phase-mapper';
import { mapSingleTournament } from './../../mappers/tournaments-mapper';
import { mapTossupValues } from './../../mappers/point-scheme-mapper';
import { getPageUrlFromStatsPageAndPhase } from './../../util/url-util';
import { groupTeamsAndPlayers } from '../../util/stats-util';

const ROOT = 'tournamentStatsWrapper/';

export const TOURNAMENT_INFO_REQUESTED = `${ROOT}TOURNAMENT_INFO_REQUESTED`;
export const TOURNAMENT_INFO_RECEIVED = `${ROOT}TOURNAMENT_INFO_RECEIVED`;
export const TOURNAMENT_INFO_FAILURE = `${ROOT}TOURNAMENT_INFO_FAILURE`;

export const TEAMS_RECEIVED = `${ROOT}TEAMS_RECEIVED`;

export const POINT_SCHEME_REQUESTED = `${ROOT}POINT_SCHEME_REQUESTED`;
export const POINT_SCHEME_RECEIVED = `${ROOT}POINT_SCHEME_RECEIVED`;
export const POINT_SCHEME_ERROR = `${ROOT}POINT_SCHEME_ERROR`;

export const PHASES_REQUESTED = `${ROOT}PHASES_REQUESTED`;
export const PHASES_RECEIVED = `${ROOT}PHASES_RECEIVED`;
export const PHASES_ERROR = `${ROOT}PHASES_ERROR`;

export const PHASE_CHANGE = `${ROOT}PHASE_CHANGE`;
export const INITIAL_PHASE_ON_LOAD = `${ROOT}INITIAL_PHASE_ON_LOAD`;

export const getTournamentInformation = tournamentId =>
  async dispatch => {
    dispatch({
      type: TOURNAMENT_INFO_REQUESTED,
    })
    try {
      const result = await tournamentClient.getTournamentInfo(tournamentId);
      const teamsAndPlayers = groupTeamsAndPlayers(await teamClient.getTeams(tournamentId));
      const tournamentInfo =  mapSingleTournament(result);
      dispatch({
        type: TOURNAMENT_INFO_RECEIVED,
        tournamentInfo,
      })
      dispatch({
        type: TEAMS_RECEIVED,
        teams: teamsAndPlayers.teams,
        players: teamsAndPlayers.players,
      })
    } catch (error) {
      dispatch({
        type: TOURNAMENT_INFO_FAILURE,
        error,
      })
    }
  }

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

export const getTournamentTossupValues = tournamentId =>
  async dispatch => {
    dispatch({
      type: POINT_SCHEME_REQUESTED,
    });
    try {
      const pointScheme = await tournamentClient.getTournamentPointScheme(tournamentId);
      const mapped = mapTossupValues(pointScheme);
      dispatch({
        type: POINT_SCHEME_RECEIVED,
        tossupValues: mapped,
      });
    } catch (error) {
      dispatch({
        type: POINT_SCHEME_ERROR,
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

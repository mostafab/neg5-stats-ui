import { handleActions } from 'redux-actions';
import {
  POINT_SCHEME_REQUESTED,
  POINT_SCHEME_RECEIVED,
  POINT_SCHEME_ERROR,
  PHASES_REQUESTED,
  PHASES_RECEIVED,
  PHASES_ERROR,
  PHASE_CHANGE,
  INITIAL_PHASE_ON_LOAD,
  TOURNAMENT_INFO_RECEIVED,
  TEAMS_RECEIVED
} from './actions';

import { usesNeg } from 'util/stats-util';

const initialState = {
  tossupValues: [],
  phases: [],
  phaseQuery: '',
  requestingPointScheme: false,
  requestingPhases: false,
  selectedPhaseId: null,
  loadedTournament: {},
  teams: {},
  players: {},
};

export default handleActions({
  [POINT_SCHEME_REQUESTED]: (state, action) => ({
    ...state,
    requestingPointScheme: true,
  }),
  [POINT_SCHEME_RECEIVED]: (state, action) => ({
    ...state,
    tossupValues: action.tossupValues,
    usesNegs: usesNeg(action.tossupValues),
  }),
  [POINT_SCHEME_ERROR]: (state, action) => ({
    ...state,
    requestingPointScheme: false,
  }),
  [PHASES_REQUESTED]: (state, action) => ({
    ...state,
    requestingPhases: true,
  }),
  [PHASES_RECEIVED]: (state, action) => ({
    ...state,
    phases: action.phases,
    requestingPhases: false,
  }),
  [PHASES_ERROR]: (state, action) => ({
    ...state,
    requestingPhases: false,
  }),
  [PHASE_CHANGE]: (state, action) => ({
    ...state,
    selectedPhaseId: action.newSelectedPhaseId,
  }),
  [INITIAL_PHASE_ON_LOAD]: (state, action) => ({
    ...state,
    selectedPhaseId: action.newSelectedPhaseId,
  }),
  [TOURNAMENT_INFO_RECEIVED]: (state, action) => ({
    ...state,
    loadedTournament: action.tournamentInfo,
  }),
  [TEAMS_RECEIVED]: (state, action) => ({
    ...state,
    teams: action.teams,
    players: action.players,
  }),
}, initialState);

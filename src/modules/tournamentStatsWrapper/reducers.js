import { handleActions } from 'redux-actions';
import {
  POINT_SCHEME_REQUESTED,
  POINT_SCHEME_RECEIVED,
  POINT_SCHEME_ERROR,
  PHASES_REQUESTED,
  PHASES_RECEIVED,
  PHASES_ERROR,
  PHASE_CHANGE,
} from './actions';

const initialState = {
  pointScheme: [],
  phases: [],
  phaseQuery: '',
  requestingPointScheme: false,
  requestingPhases: false,
  selectedPhaseId: '',
};

export default handleActions({
  [POINT_SCHEME_REQUESTED]: (state, action) => ({
    ...state,
    requestingPointScheme: true,
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
    newUrl: action.newUrl,
    selectedPhaseId: action.newSelectedPhaseId,
  }),
}, initialState);

import { handleActions } from 'redux-actions';
import {
  POINT_SCHEME_REQUESTED,
  POINT_SCHEME_RECEIVED,
  POINT_SCHEME_ERROR,
  PHASES_REQUESTED,
  PHASES_RECEIVED,
  PHASES_ERROR 
} from './actions';

const initialState = {
  pointScheme: [],
  phases: [],
  requestingPointScheme: false,
  requestingPhases: false,
};

export default handleActions({
  [POINT_SCHEME_REQUESTED]: (state, action) => ({
    ...state,
    requestingPointScheme: true,
  }),
  [PHASES_REQUESTED]: (state, action) => ({
    ...state,
    phases: action.phases,
    requestingPhases: false,
  }),
  [PHASES_ERROR]: (state, action) => ({
    ...state,
    requestingPhases: false,
  }),
}, initialState);

import { handleActions } from 'redux-actions';
import { POINT_SCHEME_REQUESTED, POINT_SCHEME_RECEIVED, POINT_SCHEME_ERROR } from './actions';

const initialState = {
  pointScheme: [],
  phases: [],
};

export default handleActions({
  [POINT_SCHEME_REQUESTED]: (state, action) => ({
    ...state,
    requestingPointScheme: true,
  }),
}, initialState);

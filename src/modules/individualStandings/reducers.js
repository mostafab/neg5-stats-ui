import { handleActions } from 'redux-actions';

import { INDIVIDUAL_STANDINGS_ERROR, INDIVIDUAL_STANDINGS_RECEIVED, INDIVIDUAL_STANDINGS_REQUESTED } from './actions';

const initialState = {
  requestingTeamStandings: false,
  individualStats: [],
};

export default handleActions({
  [INDIVIDUAL_STANDINGS_REQUESTED]: (state, action) => ({
    ...state,
    requestingTeamStandings: true,
  }),
  [INDIVIDUAL_STANDINGS_RECEIVED]: (state, action) => ({
    ...state,
    individualStats: action.individualStats,
    requestingTeamStandings: false,
  }),
  [INDIVIDUAL_STANDINGS_ERROR]: (state, action) => ({
    ...state,
    requestingTeamStandings: false,
  }),
}, initialState);
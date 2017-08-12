import { handleActions } from 'redux-actions';

import { INDIVIDUAL_STANDINGS_ERROR, INDIVIDUAL_STANDINGS_RECEIVED, INDIVIDUAL_STANDINGS_REQUESTED } from './actions';

const initialState = {
  requestingTeamStandings: false,
  individualStats: [],
};

export default handleActions({
  [INDIVIDUAL_STANDINGS_REQUESTED]: (state, action) => ({
    ...state,
    individualStatsRequested: true,
  }),
  [INDIVIDUAL_STANDINGS_RECEIVED]: (state, action) => ({
    ...state,
    individualStats: action.individualStats,
  }),
}, initialState);
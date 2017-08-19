import { handleActions } from 'redux-actions';

import { INDIVIDUAL_STANDINGS_ERROR, INDIVIDUAL_STANDINGS_RECEIVED, INDIVIDUAL_STANDINGS_REQUESTED } from './actions';

const initialState = {
  requestingIndividualStandings: false,
  individualStats: [],
  numTimesStatsReceived: 0,
};

export default handleActions({
  [INDIVIDUAL_STANDINGS_REQUESTED]: (state, action) => ({
    ...state,
    requestingIndividualStandings: true,
  }),
  [INDIVIDUAL_STANDINGS_RECEIVED]: (state, action) => ({
    ...state,
    individualStats: action.individualStats,
    requestingIndividualStandings: false,
    numTimesStatsReceived: state.numTimesStatsReceived + 1,
  }),
  [INDIVIDUAL_STANDINGS_ERROR]: (state, action) => ({
    ...state,
    requestingIndividualStandings: false,
  }),
}, initialState);
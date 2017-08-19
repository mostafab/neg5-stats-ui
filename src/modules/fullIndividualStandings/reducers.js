import { handleActions } from 'redux-actions';
import {
  INDIVIDUAL_FULL_STANDINGS_ERROR,
  INDIVIDUAL_FULL_STANDINGS_RECEIVED,
  INDIVIDUAL_FULL_STANDINGS_REQUESTED
} from './actions';

const initialState = {
  requestingFullIndividualStandings: false,
  fullIndividualStats: [],
};

export default handleActions({
  [INDIVIDUAL_FULL_STANDINGS_REQUESTED]: (state, action) => ({
    ...state,
    requestingFullIndividualStandings: true,
  }),
  [INDIVIDUAL_FULL_STANDINGS_RECEIVED]: (state, action) => ({
    ...state,
    fullIndividualStats: action.fullIndividualStats,
    requestingFullIndividualStandings: false,
  }),
  [INDIVIDUAL_FULL_STANDINGS_ERROR]: (state, action) => ({
    ...state,
    requestingFullIndividualStandings: false,
  }),
}, initialState);

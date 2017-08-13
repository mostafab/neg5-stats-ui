import { handleActions } from 'redux-actions';
import {
  TEAM_FULL_STANDINGS_ERROR,
  TEAM_FULL_STANDINGS_RECEIVED,
  TEAM_FULL_STANDINGS_REQUESTED,
} from './actions';

const initialState = {
  requestingFullTeamStandings: false,
  fullTeamStats: [],
};

export default handleActions({
  [TEAM_FULL_STANDINGS_REQUESTED]: (state, action) => ({
    ...state,
    requestingFullTeamStandings: true,
  }),
  [TEAM_FULL_STANDINGS_RECEIVED]: (state, action) => ({
    ...state,
    fullTeamStats: action.fullTeamStats,
    requestingFullTeamStandings: false,
  }),
  [TEAM_FULL_STANDINGS_ERROR]: (state, action) => ({
    ...state,
    requestingFullTeamStandings: false,
  }),
}, initialState);

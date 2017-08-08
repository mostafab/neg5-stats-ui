import { handleActions } from 'redux-actions';
import {
  TEAM_STANDINGS_REQUESTED,
  TEAM_STANDINGS_ERROR,
  TEAM_STANDINGS_RECEIVED } from './actions';

const initialState = {
  requestingTeamStandings: false,
  allTeamStats: [],
  brackets: [],
};

export default handleActions({
  [TEAM_STANDINGS_REQUESTED]: (state, action) => ({
    ...state,
    requestingTeamStandings: true,
  }),
}, initialState);

import { handleActions } from 'redux-actions';
import { RECENT_TOURNAMENTS_ERROR, RECENT_TOURNAMENTS_RECEIVED, RECENT_TOURNAMENTS_REQUESTED } from './actions';

const initialState = {
  recentTournaments: [],
};

export default handleActions({
  [RECENT_TOURNAMENTS_REQUESTED]: (state, action) => ({
    ...state,
    requestingTournaments: true,
  }),
  [RECENT_TOURNAMENTS_RECEIVED]: (state, action) => ({
    ...state,
    recentTournaments: action.recentTournaments,
    requestingTournaments: false,
  }),
  [RECENT_TOURNAMENTS_ERROR]: (state, action) => ({
    ...state,
    requestingTournaments: false,
  }),
}, initialState);

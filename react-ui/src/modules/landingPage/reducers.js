import { handleActions } from 'redux-actions';
import moment from 'moment';
import { RECENT_TOURNAMENTS_ERROR, RECENT_TOURNAMENTS_RECEIVED, RECENT_TOURNAMENTS_REQUESTED,
  CHANGED_FOCUSED_DATE, CHANGED_START_OR_END_DATES } from './actions';

const ONE_MONTH_AGO_IN_MONTHS = 1;

const initialState = {
  recentTournaments: [],
  searchForm: {
    focusedInput: null,
    startDate: moment().subtract(ONE_MONTH_AGO_IN_MONTHS, 'months'),
    endDate: moment(),
  }
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
  [CHANGED_FOCUSED_DATE]: (state, action) => ({
    ...state,
    searchForm: {
      ...state.searchForm,
      focusedInput: action.focusedInput,
    },
  }),
  [CHANGED_START_OR_END_DATES]: (state, action) => ({
    ...state,
    searchForm: {
      ...state.searchForm,
      startDate: action.startDate,
      endDate: action.endDate,
    },
  }),
}, initialState);

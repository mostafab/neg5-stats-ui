import { handleActions } from 'redux-actions';
import moment from 'moment';
import { RECENT_TOURNAMENTS_ERROR, RECENT_TOURNAMENTS_RECEIVED, RECENT_TOURNAMENTS_REQUESTED,
  CHANGED_FOCUSED_DATE, CHANGED_START_OR_END_DATES, TOURNAMENT_SEARCH_QUERY_CHANGE, TOURNAMENT_SEARCH_QUERY_SUBMITTED,
  TOURNAMENT_SEARCH_QUERY_FAILURE, TOURNAMENT_SEARCH_QUERY_SUCCESS } from './actions';

const THREE_MONTHS_AGO = 3;

const initialState = {
  recentTournaments: [],
  searchForm: {
    focusedInput: null,
    startDate: moment().subtract(THREE_MONTHS_AGO, 'months').startOf('day').valueOf(),
    endDate: moment().startOf('day').valueOf(),
    oldStartDate: null,
    oldEndDate: null,
  },
  tournamentSearchForm: {
    query: '',
    tournaments: [],
    error: null,
  },
  searchingForTournaments: false,
  numTimesTournamentsRequested: 0,
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
    numTimesTournamentsRequested: state.numTimesTournamentsRequested + 1,
    searchForm: {
      ...state.searchForm,
      oldStartDate: state.searchForm.startDate,
      oldEndDate: state.searchForm.endDate,
    },
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
  [TOURNAMENT_SEARCH_QUERY_CHANGE]: (state, action) => ({
    ...state,
    tournamentSearchForm: {
      ...state.tournamentSearchForm,
      query: action.query,
    },
  }),
  [TOURNAMENT_SEARCH_QUERY_SUBMITTED]: (state, action) => ({
    ...state,
    searchingForTournaments: true,
  }),
  [TOURNAMENT_SEARCH_QUERY_SUCCESS]: (state, action) => ({
    ...state,
    searchingForTournaments: false,
    tournamentSearchForm: {
      ...state.tournamentSearchForm,
      tournaments: action.tournaments,
    }
  }),
  [TOURNAMENT_SEARCH_QUERY_FAILURE]: (state, action) => ({
    ...state,
    searchingForTournaments: false,
    error: action.error,
  })
}, initialState);

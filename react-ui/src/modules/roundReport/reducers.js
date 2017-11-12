import { handleActions } from 'redux-actions';
import {
  ROUND_REPORT_ERROR,
  ROUND_REPORT_RECEIVED,
  ROUND_REPORT_REQUESTED
} from './actions';
import { resetLazyLoadStatsOnTournamentOrPhaseChanged } from './../common/common-reducers';

const initialState = {
  requestingRoundReport: false,
  roundReportStats: [],
  numTimesStatsReceived: 0,
};

export default handleActions({
  [ROUND_REPORT_REQUESTED]: (state, action) => ({
    ...state,
    requestingRoundReport: true,
  }),
  [ROUND_REPORT_RECEIVED]: (state, action) => ({
    ...state,
    roundReportStats: action.roundReportStats,
    requestingRoundReport: false,
    numTimesStatsReceived: state.numTimesStatsReceived + 1,
  }),
  [ROUND_REPORT_ERROR]: (state, action) => ({
    ...state,
    requestingRoundReport: false,
  }),
  ...resetLazyLoadStatsOnTournamentOrPhaseChanged,
}, initialState);

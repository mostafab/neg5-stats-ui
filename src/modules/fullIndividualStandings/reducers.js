import { handleActions } from "redux-actions";
import {
  INDIVIDUAL_FULL_STANDINGS_ERROR,
  INDIVIDUAL_FULL_STANDINGS_RECEIVED,
  INDIVIDUAL_FULL_STANDINGS_REQUESTED,
} from "./actions";

import { resetLazyLoadStatsOnTournamentOrPhaseChanged } from "modules/common/common-reducers";

const initialState = {
  requestingFullIndividualStandings: false,
  fullIndividualStats: [],
  numTimesStatsReceived: 0,
};

export default handleActions(
  {
    [INDIVIDUAL_FULL_STANDINGS_REQUESTED]: (state, action) => ({
      ...state,
      requestingFullIndividualStandings: true,
    }),
    [INDIVIDUAL_FULL_STANDINGS_RECEIVED]: (state, action) => ({
      ...state,
      fullIndividualStats: action.fullIndividualStats,
      requestingFullIndividualStandings: false,
      numTimesStatsReceived: state.numTimesStatsReceived + 1,
    }),
    [INDIVIDUAL_FULL_STANDINGS_ERROR]: (state, action) => ({
      ...state,
      requestingFullIndividualStandings: false,
    }),
    ...resetLazyLoadStatsOnTournamentOrPhaseChanged,
  },
  initialState
);

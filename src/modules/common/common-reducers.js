import { TOURNAMENT_INFO_RECEIVED, PHASE_CHANGE } from './../tournamentStatsWrapper/actions';

export const resetLazyLoadStatsOnTournamentOrPhaseChanged = {
  [TOURNAMENT_INFO_RECEIVED]: (state, action) => ({
    ...state,
    numTimesStatsReceived: 0
  }),
  [PHASE_CHANGE]: (state, action) => ({
    ...state,
    numTimesStatsReceived: 0,
  }),
}

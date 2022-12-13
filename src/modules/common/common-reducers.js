import { TOURNAMENT_INFO_RECEIVED, PHASE_CHANGE } from 'modules/tournamentStatsWrapper/actions';

export const resetLazyLoadStatsOnTournamentOrPhaseChanged = {
  [TOURNAMENT_INFO_RECEIVED]: (state, _action) => ({
    ...state,
    numTimesStatsReceived: 0
  }),
  [PHASE_CHANGE]: (state, _action) => ({
    ...state,
    numTimesStatsReceived: 0,
  }),
}

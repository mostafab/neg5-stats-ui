import tournamentClient from './../../client/tournament-client';
import { mapTournaments } from './../../mappers/tournaments-mapper';

const ROOT = 'landingPage/';

export const RECENT_TOURNAMENTS_REQUESTED = `${ROOT}RECENT_TOURNAMENTS_REQUESTED`;
export const RECENT_TOURNAMENTS_RECEIVED = `${ROOT}RECENT_TOURNAMENTS_RECEIVED`;
export const RECENT_TOURNAMENTS_ERROR = `${ROOT}RECENT_TOURNAMENTS_ERROR`;

export const CHANGED_FOCUSED_DATE = `${ROOT}CHANGED_FOCUSED_DATE`;
export const CHANGED_START_OR_END_DATES = `${ROOT}CHANGED_START_OR_END_DATES`;

export const changeFocusedDate = focusedInput =>
  dispatch =>
    dispatch({
      type: CHANGED_FOCUSED_DATE,
      focusedInput,
    });

export const changeDates = (startDate, endDate) =>
    dispatch =>
      dispatch({
        type: CHANGED_START_OR_END_DATES,
        startDate,
        endDate,
      });

export const getRecentTournaments = (daysSince = 30) =>
  async dispatch => {
    dispatch({
      type: RECENT_TOURNAMENTS_REQUESTED,
    });
    try {
      const tournaments = await tournamentClient.getRecentTournaments(daysSince);
      const mapped = mapTournaments(tournaments);
      dispatch({
        type: RECENT_TOURNAMENTS_RECEIVED,
        recentTournaments: mapped,
      });
    } catch (error) {
      dispatch({
        type: RECENT_TOURNAMENTS_ERROR,
      });
    }
  };

export const getTournamentsBetweenDates = (startDate = new Date(), endDate = new Date()) =>
  async dispatch => {
    dispatch({
      type: RECENT_TOURNAMENTS_REQUESTED,
    });
    try {
      const tournaments = await tournamentClient.getTournamentsInRange(startDate, endDate);
      const mapped = mapTournaments(tournaments);
      dispatch({
        type: RECENT_TOURNAMENTS_RECEIVED,
        recentTournaments: mapped,
      });
    } catch (error) {
      dispatch({
        type: RECENT_TOURNAMENTS_ERROR,
      });
    }
  };
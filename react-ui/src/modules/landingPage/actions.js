import tournamentClient from './../../client/tournament-client';
import { mapTournaments } from './../../mappers/tournaments-mapper';

const ROOT = 'landingPage/';

export const RECENT_TOURNAMENTS_REQUESTED = `${ROOT}RECENT_TOURNAMENTS_REQUESTED`;
export const RECENT_TOURNAMENTS_RECEIVED = `${ROOT}RECENT_TOURNAMENTS_RECEIVED`;
export const RECENT_TOURNAMENTS_ERROR = `${ROOT}RECENT_TOURNAMENTS_ERROR`;

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
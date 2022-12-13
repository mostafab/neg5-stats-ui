import { getFullIndividualStandings } from 'client/stats-client';
import { mapFullIndividualStandings } from 'mappers/individual-standings-mapper';

const ROOT = 'individualFullStandings/';

export const INDIVIDUAL_FULL_STANDINGS_REQUESTED = `${ROOT}INDIVIDUAL_FULL_STANDINGS_REQUESTED`;
export const INDIVIDUAL_FULL_STANDINGS_RECEIVED = `${ROOT}INDIVIDUAL_FULL_STANDINGS_RECEIVED`;
export const INDIVIDUAL_FULL_STANDINGS_ERROR = `${ROOT}INDIVIDUAL_FULL_STANDINGS_ERROR`;

export const requestFullIndividualStandings = (tournamentId, phaseId) =>
  async dispatch => {
    dispatch({
      type: INDIVIDUAL_FULL_STANDINGS_REQUESTED,
    });
    try {
      const individualStats = await getFullIndividualStandings(tournamentId, phaseId);
      const mapped = mapFullIndividualStandings(individualStats.players); 
      dispatch({
        type: INDIVIDUAL_FULL_STANDINGS_RECEIVED,
        fullIndividualStats: mapped,
      });
    } catch (e) {
      dispatch({
        type: INDIVIDUAL_FULL_STANDINGS_ERROR,
      });
    }
  }

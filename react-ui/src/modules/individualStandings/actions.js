import statsClient from '../../client/stats-client';
import { mapIndividualStandings } from '../../mappers/individual-standings-mapper';

const ROOT = 'individualStandings/';

export const INDIVIDUAL_STANDINGS_REQUESTED = `${ROOT}INDIVIDUAL_STANDINGS_REQUESTED`;
export const INDIVIDUAL_STANDINGS_RECEIVED = `${ROOT}INDIVIDUAL_STANDINGS_RECEIVED`;
export const INDIVIDUAL_STANDINGS_ERROR = `${ROOT}INDIVIDUAL_STANDINGS_ERROR`;

export const getIndividualStandings = (tournamentId, phaseId) =>
  async dispatch => {
    try {
      dispatch({
        type: INDIVIDUAL_STANDINGS_REQUESTED,
      });
      const standings = await statsClient.getIndividualStandings(tournamentId, phaseId);
      const mappedStandings = mapIndividualStandings(standings.playerStandings);
      dispatch({
        type: INDIVIDUAL_STANDINGS_RECEIVED,
        individualStats: mappedStandings,
      });
    } catch (e) {
      dispatch({
        type: INDIVIDUAL_STANDINGS_ERROR,
      });
    }
  }
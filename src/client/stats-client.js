import axios from 'axios';

const HOST = 'http://localhost:8080';

const TEAM_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/team`;

 export const getTeamStandings = async (tournamentId, phaseId) => {
   try {
    const url = TEAM_STANDINGS_URL.replace('{tournamentId}', tournamentId);
    const { data } = await axios.get(url);
    return data.result;
   } catch (e) {
    throw e;
   }
 }

export default {
  getTeamStandings,
};


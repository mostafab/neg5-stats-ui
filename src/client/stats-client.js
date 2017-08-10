import axios from 'axios';

const HOST = 'http://localhost:8080';

const TEAM_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/team?phase={phaseId}`;

 export const getTeamStandings = async (tournamentId, phaseId = '') => {
   try {
    const url = TEAM_STANDINGS_URL.replace('{tournamentId}', tournamentId).replace('{phaseId}', phaseId);
    const { data } = await axios.get(url);
    return data.result;
   } catch (e) {
    throw e;
   }
 }

export default {
  getTeamStandings,
};


import axios from 'axios';

const HOST = process.env.STATS_HOST;

const TEAM_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/team?phase={phaseId}`;
const INDIVIDUAL_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/player?phase={phaseId}`;
const TEAM_FULL_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/teamfull?phase={phaseId}`;
const INDIVIDUAL_FULL_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/playerfull?phase={phaseId}`;
const ROUND_REPORT_URL = `${HOST}/api/t/{tournamentId}/stats/roundreport?phase={phaseId}`;

export const getTeamStandings = async (tournamentId, phaseId = '') => {
   try {
    const url = TEAM_STANDINGS_URL.replace('{tournamentId}', tournamentId).replace('{phaseId}', phaseId);
    return get(url);
   } catch (e) {
    throw e;
   }
 }

export const getIndividualStandings = async (tournamentId, phaseId = '') => {
  try {
    const url = INDIVIDUAL_STANDINGS_URL.replace('{tournamentId}', tournamentId).replace('{phaseId}', phaseId);
    return get(url);
  } catch (e) {
    throw e;
  }
}

export const getFullIndividualStandings = async (tournamentId, phaseId = '') => {
  try {
    const url = INDIVIDUAL_FULL_STANDINGS_URL.replace('{tournamentId}', tournamentId).replace('{phaseId}', phaseId);
    return get(url);
  } catch (e) {
    throw e;
  }
}

export const getFullTeamStandings = async (tournamentId, phaseId = '') => {
  try {
    const url = TEAM_FULL_STANDINGS_URL.replace('{tournamentId}', tournamentId).replace('{phaseId}', phaseId);
    return get(url);
  } catch (e) {
    throw e;
  }
}

export const getRoundReport = async (tournamentId, phaseId = '') => {
  try {
    const url = ROUND_REPORT_URL.replace('{tournamentId}', tournamentId).replace('{phaseId}', phaseId);
    return get(url);
  } catch (e) {
    throw e;
  }
}

const get = async (url, config = {}) => {
  try {
    const { data } = await axios.get(url, config);
    return data.result;
  } catch (err) {
    throw err;
  }
} 

export default {
  getTeamStandings,
  getIndividualStandings,
  getFullIndividualStandings,
  getFullTeamStandings,
  getRoundReport,
};


import axios from 'axios';

const HOST = '';

const TEAM_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/team-standings?phase={phaseId}`;
const INDIVIDUAL_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/individuals?phase={phaseId}`;
const TEAM_FULL_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/team-full?phase={phaseId}`;
const INDIVIDUAL_FULL_STANDINGS_URL = `${HOST}/api/t/{tournamentId}/stats/player-full?phase={phaseId}`;
const ROUND_REPORT_URL = `${HOST}/api/t/{tournamentId}/stats/round-report?phase={phaseId}`;

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


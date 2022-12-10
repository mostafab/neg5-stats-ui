import axios from 'axios';

const TEAM_STANDINGS_URL = `/neg5-api/tournaments/{tournamentId}/stats/team-standings`;
const INDIVIDUAL_STANDINGS_URL = `/neg5-api/tournaments/{tournamentId}/stats/individual-standings`;
const TEAM_FULL_STANDINGS_URL = `/neg5-api/tournaments/{tournamentId}/stats/team-full-standings`;
const INDIVIDUAL_FULL_STANDINGS_URL = `/neg5-api/tournaments/{tournamentId}/stats/individual-full-standings`;
const ROUND_REPORT_URL = `/neg5-api/tournaments/{tournamentId}/stats/round-report`;

export const getTeamStandings = async (tournamentId, phaseId = '') => {
   try {
    let url = TEAM_STANDINGS_URL.replace('{tournamentId}', tournamentId);
    if (phaseId) {
      url += `?phase=${phaseId}`;
    }
    return (await axios.get(url)).data;
   } catch (e) {
    throw e;
   }
 }

export const getIndividualStandings = async (tournamentId, phaseId = '') => {
  try {
    let url = INDIVIDUAL_STANDINGS_URL.replace('{tournamentId}', tournamentId);
    if (phaseId) {
      url += `?phase=${phaseId}`;
    }
    return (await axios.get(url)).data;
  } catch (e) {
    throw e;
  }
}

export const getFullIndividualStandings = async (tournamentId, phaseId = '') => {
  try {
    let url = INDIVIDUAL_FULL_STANDINGS_URL.replace('{tournamentId}', tournamentId);
    if (phaseId) {
      url += `?phase=${phaseId}`;
    }
    return (await axios.get(url)).data;
  } catch (e) {
    throw e;
  }
}

export const getFullTeamStandings = async (tournamentId, phaseId = '') => {
  try {
    let url = TEAM_FULL_STANDINGS_URL.replace('{tournamentId}', tournamentId);
    if (phaseId) {
      url += `?phase=${phaseId}`;
    }
    return (await axios.get(url)).data;
  } catch (e) {
    throw e;
  }
}

export const getRoundReport = async (tournamentId, phaseId = '') => {
  try {
    let url = ROUND_REPORT_URL.replace('{tournamentId}', tournamentId);
    if (phaseId) {
      url += `?phase=${phaseId}`;
    }
    return (await axios.get(url)).data;
  } catch (e) {
    throw e;
  }
}

export default {
  getTeamStandings,
  getIndividualStandings,
  getFullIndividualStandings,
  getFullTeamStandings,
  getRoundReport,
};


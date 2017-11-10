import axios from 'axios';
import config from './../config';

const HOST = config.REACT_APP_BASE_TOURNAMENT_API_URL;

const INFO_URL = `${HOST}/api/t/{tournamentId}/info`;
const PHASES_URL = `${HOST}/api/t/{tournamentId}/phases`;
const BRACKETS_URL = `${HOST}/api/t/{tournamentId}/brackets`;
const POINT_SCHEME_URL = `${HOST}/api/t/{tournamentId}/point-scheme`;
const RECENT_TOURNAMENTS_URL = `${HOST}/api/t/findRecent?days={days}`;
const BETWEEN_DATES_TOURNAMENT_URL = `${HOST}/api/t/byDateRange`;
const BY_NAME_URL = `${HOST}/api/t/byName`;

export const getTournamentInfo = async (tournamentId) => {
  try {
    const url = INFO_URL.replace('{tournamentId}', tournamentId);
    return (await axios.get(url)).data.result;
  } catch (error) {
    throw error;
  }
}

export const getTournamentPhases = async (tournamentId) => {
  try {
    const url = PHASES_URL.replace('{tournamentId}', tournamentId);
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    throw error;
  }
};

export const getTournamentBrackets = async (tournamentId) => {
  try {
    const url = BRACKETS_URL.replace('{tournamentId}', tournamentId);
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    throw error;
  }
}

export const getTournamentPointScheme = async (tournamentId) => {
  try {
    const url = POINT_SCHEME_URL.replace('{tournamentId}', tournamentId);
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    throw error;
  }
}

export const getRecentTournaments = async (daysSince) => {
  try {
    const url = RECENT_TOURNAMENTS_URL.replace('{days}', daysSince);
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    throw error;
  }
}

export const getTournamentsInRange = async (startDate, endDate) => {
  try {
    const url = BETWEEN_DATES_TOURNAMENT_URL;
    const { data } = await axios.get(url, {
      params: {
        startDate,
        endDate,
      },
    });
    return data.result;
  } catch (error) {
    throw error;
  }
}

export const getTournamentsByName = async (searchQuery) => {
  try {
    const url = BY_NAME_URL;
    const { data } = await axios.get(url, {
      params: {
        searchQuery
      },
    })
    return data.result;
  } catch (error) {
    throw error;
  }
}

export default {
  getTournamentPhases,
  getTournamentBrackets,
  getTournamentPointScheme,
  getRecentTournaments,
  getTournamentsInRange,
  getTournamentsByName,
  getTournamentInfo
};

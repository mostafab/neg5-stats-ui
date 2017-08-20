import axios from 'axios';

const HOST = process.env.TOURNAMENT_API_HOST;

const PHASES_URL = `${HOST}/api/t/{tournamentId}/phases`;
const BRACKETS_URL = `${HOST}/api/t/{tournamentId}/divisions`;
const POINT_SCHEME_URL = `${HOST}/api/t/{tournamentId}/pointscheme`;
const RECENT_TOURNAMENTS_URL = `${HOST}/api/t/findRecent?days={days}`;
const BETWEEN_DATES_URL = `${HOST}/api/t/byDateRange`;

export const getTournamentPhases = async (tournamentId) => {
  try {
    const url = PHASES_URL.replace('{tournamentId}', tournamentId);
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    throw error;
  };
};

export const getTournamentBrackets = async (tournamentId) => {
  try {
    const url = BRACKETS_URL.replace('{tournamentId}', tournamentId);
    console.log(url);
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

export const getRecentTournaments = async (daysSince = 30) => {
  try {
    const url = RECENT_TOURNAMENTS_URL.replace('{days}', daysSince);
    const { data } = await axios.get(url);
    return data.result;
  } catch (error) {
    throw error;
  }
}

export const getTournamentsBetweenDates = async (startDate, endDate) => {
  try {
    const url = BETWEEN_DATES_URL;
    const { data } = await axios.get(url, {
      params: {
        startDate,
        endDate,
      }
    });
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
  getTournamentsBetweenDates,
};

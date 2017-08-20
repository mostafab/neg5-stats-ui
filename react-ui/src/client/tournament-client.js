import axios from 'axios';
import config from './../config';

const HOST = config.REACT_APP_BASE_TOURNAMENT_API_URL;

const PHASES_URL = `${HOST}/api/t/{tournamentId}/phases`;
const BRACKETS_URL = `${HOST}/api/t/{tournamentId}/brackets`;
const POINT_SCHEME_URL = `${HOST}/api/t/{tournamentId}/point-scheme`;
const RECENT_TOURNAMENTS_URL = `${HOST}/api/t/findRecent?days={days}`;

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

export default {
  getTournamentPhases,
  getTournamentBrackets,
  getTournamentPointScheme,
  getRecentTournaments,
};

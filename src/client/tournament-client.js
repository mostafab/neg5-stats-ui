import axios from 'axios';

const HOST = 'http://localhost:8080';

const PHASES_URL = `${HOST}/api/t/{tournamentId}/phases`;
const BRACKETS_URL = `${HOST}/api/t/{tournamentId}/divisions`;

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

export default {
  getTournamentPhases,
  getTournamentBrackets
};

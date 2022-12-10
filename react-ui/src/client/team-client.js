import axios from 'axios';

export const getTeams = async tournamentId => {
  try {
    const results = await axios.get(`/neg5-api/tournaments/${tournamentId}/teams`);
    return results.data;
  } catch (err) {
    throw err;
  }
}

export default {
  getTeams,
}
import axios from 'axios';

import config from './../config';

const HOST = config.REACT_APP_BASE_STATS_API_URL;

export const getTeams = async tournamentId => {
  try {
    const results = await axios.get(`${HOST}/neg5-api/tournaments/${tournamentId}/teams`);
    return results.data;
  } catch (err) {
    throw err;
  }
}

export default {
  getTeams,
}
import axios from './';

export const getTeams = async tournamentId => {
  const url = `/neg5-api/tournaments/${tournamentId}/teams`;
  return (await axios.get(url)).data;
}

export default {
  getTeams,
}
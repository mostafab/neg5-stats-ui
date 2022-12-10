export const getTeams = async tournamentId => {
  const response = await fetch(`/neg5-api/tournaments/${tournamentId}/teams`);
  return await response.json();
}

export default {
  getTeams,
}
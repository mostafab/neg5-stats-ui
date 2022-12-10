import moment from 'moment'

export const getTournamentInfo = async (tournamentId) => {
  const url = `/neg5-api/tournaments/${tournamentId}`;
  const response = await fetch(url);
  return await response.json();
}

export const getRecentTournaments = async (daysSince) => {
  const url = `/neg5-api/search/tournaments/days?days=${daysSince}`;
  const response = await fetch(url);
  return await response.json();
}

export const getTournamentsInRange = async (startDate, endDate) => {
  const start = moment(startDate).format('YYYY-MM-DD');
  const end = moment(endDate).format('YYYY-MM-DD');
  const url = `/neg5-api/search/tournaments/dates?start=${start}&end=${end}`;
  const response = await fetch(url);
  return await response.json();
}

export const getTournamentsByName = async (searchQuery) => {
  const url = `/neg5-api/search/tournaments/name?name=${searchQuery}`;
  const response = await fetch(url);
  return await response.json();
}

export default {
  getRecentTournaments,
  getTournamentsInRange,
  getTournamentsByName,
  getTournamentInfo
};

import axios from "./";
import moment from "moment";

export const getTournamentInfo = async (tournamentId) => {
  const url = `/neg5-api/tournaments/${tournamentId}`;
  return (await axios.get(url)).data;
};

export const getRecentTournaments = async (daysSince) => {
  const url = `/neg5-api/search/tournaments/days?days=${daysSince}`;
  return (await axios.get(url)).data;
};

export const getTournamentsInRange = async (startDate, endDate) => {
  const start = moment(startDate).format("YYYY-MM-DD");
  const end = moment(endDate).format("YYYY-MM-DD");
  const url = `/neg5-api/search/tournaments/dates?start=${start}&end=${end}`;
  return (await axios.get(url)).data;
};

export const getTournamentsByName = async (searchQuery) => {
  const url = `/neg5-api/search/tournaments/name?name=${searchQuery}`;
  return (await axios.get(url)).data;
};

export default {
  getRecentTournaments,
  getTournamentsInRange,
  getTournamentsByName,
  getTournamentInfo,
};

import axios from "./";

export const getTeamStandings = async (tournamentId, phaseId = "") => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/team-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  return (await axios.get(url)).data;
};

export const getIndividualStandings = async (tournamentId, phaseId = "") => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/individual-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  return (await axios.get(url)).data;
};

export const getFullIndividualStandings = async (
  tournamentId,
  phaseId = ""
) => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/individual-full-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  return (await axios.get(url)).data;
};

export const getFullTeamStandings = async (tournamentId, phaseId = "") => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/team-full-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  return (await axios.get(url)).data;
};

export const getRoundReport = async (tournamentId, phaseId = "") => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/round-report`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  return (await axios.get(url)).data;
};

export default {
  getTeamStandings,
  getIndividualStandings,
  getFullIndividualStandings,
  getFullTeamStandings,
  getRoundReport,
};

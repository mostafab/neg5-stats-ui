export const getTeamStandings = async (tournamentId, phaseId = '') => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/team-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  const response = await fetch(url);
  return await response.json();
 }

export const getIndividualStandings = async (tournamentId, phaseId = '') => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/individual-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  const response = await fetch(url);
  return await response.json();
}

export const getFullIndividualStandings = async (tournamentId, phaseId = '') => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/individual-full-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  const response = await fetch(url);
  return await response.json();
}

export const getFullTeamStandings = async (tournamentId, phaseId = '') => {
  let url = `/neg5-api/tournaments/${tournamentId}/stats/team-full-standings`;
  if (phaseId) {
    url += `?phase=${phaseId}`;
  }
  const response = await fetch(url);
  return await response.json();
}

export const getRoundReport = async (tournamentId, phaseId = '') => {
  try {
    let url = `/neg5-api/tournaments/${tournamentId}/stats/round-report`
    if (phaseId) {
      url += `?phase=${phaseId}`;
    }
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export default {
  getTeamStandings,
  getIndividualStandings,
  getFullIndividualStandings,
  getFullTeamStandings,
  getRoundReport,
};


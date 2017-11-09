import slugUtil from './slug';

export const getPageUrlFromStatsPageAndPhase = (tournamentId, phaseId, oldUrl) => {
  const typeOfStats = oldUrl.split('/')[3] || '';
  let newUrl = `/t/${tournamentId}/${typeOfStats}`;
  if (phaseId && phaseId.trim().length > 0) {
    newUrl += `?phase=${phaseId}`;
  }
  return newUrl;
}

export const getTournamentUrlFromTournament = (tournament) => {
  const sluggedName = slugUtil.slugify(tournament.name);
  return `/t/${tournament.id}/${sluggedName}`;
}

export default {
  getPageUrlFromStatsPageAndPhase,
  getTournamentUrlFromTournament,
};

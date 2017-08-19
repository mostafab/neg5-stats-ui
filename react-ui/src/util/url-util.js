export const getPageUrlFromStatsPageAndPhase = (tournamentId, phaseId, oldUrl) => {
  const typeOfStats = oldUrl.split('/')[3] || '';
  let newUrl = `/t/${tournamentId}/${typeOfStats}`;
  if (phaseId.trim().length > 0) {
    newUrl += `?phase=${phaseId}`;
  }
  return newUrl;
}

export default {
  getPageUrlFromStatsPageAndPhase,
};

// TODO fix regex to fit /t/:sdasds/team-standings?phase=sdsds
const URL_FORMAT = /\/t\/[0-9A-Za-z]*\/[A-Za-z^\/]*/;

export const getPageUrlFromStatsPageAndPhase = (tournamentId, phaseId, oldUrl) => {
  const typeOfStats = oldUrl.split('/')[3];
  let newUrl = `/t/${tournamentId}/${typeOfStats}`;
  if (phaseId.trim().length > 0) {
    newUrl += `?phase=${phaseId}`;
  }
  return newUrl;
}

export default {
  getPageUrlFromStatsPageAndPhase,
};

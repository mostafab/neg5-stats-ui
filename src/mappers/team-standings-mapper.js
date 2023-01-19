/**
 * Maps the response payload from the server to a data object
 * the front-end uses.
 * @param {Object[]} allTeamStats
 */
export const mapTeamStandings = (allTeamStats) =>
  allTeamStats.map(mapSingleTeamStats);

/**
 * Maps a single team from the response payload from the server to a data object
 * the front-end uses.
 * @param {Object} teamStats
 */
export const mapSingleTeamStats = (teamStats) => ({
  losses: teamStats.record.losses,
  margin: teamStats.marginOfVictory,
  papg: teamStats.pointsAgainstPerGame,
  ppg: teamStats.pointsPerGame,
  ppb: teamStats.pointsPerBonus,
  teamId: teamStats.teamId,
  ties: teamStats.record.ties,
  tossupTotals: teamStats.tossupAnswerCounts.map((tv) => ({
    value: tv.value,
    total: tv.total,
  })),
  totalTUH: teamStats.tossupsHeard,
  winPercentage: teamStats.record.winPercentage,
  wins: teamStats.record.wins,
  getsToNegRatio: teamStats.getsToNegRatio,
  powersToNegRatio: teamStats.powersToNegRatio,
  pointsPerTossupHeard: teamStats.pointsPerTossupHeard,
});

export const mapFullTeamStandings = (allStats) =>
  allStats.map(mapSingleFullTeamStanding);

export const mapSingleFullTeamStanding = (standing) => ({
  teamId: standing.teamId,
  matches: Object.assign(
    [],
    standing.matches.map((match) => ({
      bouncebackPoints: match.bouncebackPoints || null,
      opponentId: match.opponentTeamId,
      opponentScore: match.opponentPoints == undefined ? null : match.opponentPoints ,
      ppb: match.pointsPerBonus === undefined ? null : match.pointsPerBonus,
      result: match.result,
      round: match.round,
      totalPoints: match.points === undefined ? null : match.points,
      tossupTotals: match.tossupAnswerCounts.map((tv) => ({
        value: tv.value,
        total: tv.total,
        answerType: tv.answerType,
      })),
      totalTUH: match.tossupsHeard === undefined ? null : match.tossupsHeard,
      powersToNegRatio: match.powersToNegRatio === undefined ? null : match.powersToNegRatio,
      getsToNegRatio: match.getsToNegRatio === undefined ? null : match.getsToNegRatio,
      bonusPoints: match.bonusPoints === undefined ? null : match.bonusPoints,
      bonusesHeard: match.bonusesHeard === undefined ? null : match.bonusesHeard,
      pointsPerTossupHeard: match.pointsPerTossupHeard === undefined ? null : match.pointsPerTossupHeard,
    }))
  ),
});

export default {
  mapTeamStandings,
  mapSingleTeamStats,
  mapFullTeamStandings,
  mapSingleFullTeamStanding,
};

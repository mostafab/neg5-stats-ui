/**
 * Maps the response payload from the server to a data object
 * the front-end uses. 
 * @param {Object[]} allTeamStats 
 */
export const mapTeamStandings = allTeamStats => allTeamStats.map(mapSingleTeamStats);

/**
 * Maps a single team from the response payload from the server to a data object
 * the front-end uses. 
 * @param {Object} teamStats 
 */
export const mapSingleTeamStats = teamStats => ({
  losses: teamStats.record.losses,
  margin: teamStats.marginOfVictory,
  papg: teamStats.pointsAgainstPerGame,
  ppg: teamStats.pointsPerGame,
  ppb: teamStats.pointsPerBonus,
  teamId: teamStats.teamId,
  ties: teamStats.record.ties,
  tossupTotals: teamStats.tossupAnswerCounts.map(tv => ({
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

export const mapFullTeamStandings = allStats => allStats.map(mapSingleFullTeamStanding);

export const mapSingleFullTeamStanding = standing => ({
  teamId: standing.teamId,
  matches: Object.assign([], standing.matches.map(match => ({
    bouncebackPoints: match.bouncebackPoints || null,
    opponentId: match.opponentTeamId,
    opponentScore: match.opponentPoints,
    ppb: match.pointsPerBonus,
    result: match.result,
    round: match.round,
    totalPoints: match.points,
    tossupTotals: match.tossupAnswerCounts.map(tv => ({
      value: tv.value,
      total: tv.total,
      answerType: tv.answerType,
    })),
    totalTUH: match.tossupsHeard,
    powersToNegRatio: match.powersToNegRatio,
    getsToNegRatio: match.getsToNegRatio,
    bonusPoints: match.bonusPoints,
    bonusesHeard: match.bonusesHeard,
    pointsPerTossupHeard: match.pointsPerTossupHeard,
  }))),
});

export default {
  mapTeamStandings,
  mapSingleTeamStats,
  mapFullTeamStandings,
  mapSingleFullTeamStanding,
};

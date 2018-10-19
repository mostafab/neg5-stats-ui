export const mapIndividualStandings = standings => standings.map(mapSingleIndividualStanding);

export const mapSingleIndividualStanding = (standing, index) => {
  return {
    gamesPlayed: standing.gamesPlayed,
    playerId: standing.playerId,
    ppg: standing.pointsPerGame,
    pointsPerTossup: standing.pointsPerTossupHeard,
    tossupTotals: standing.tossupAnswerCounts.map(tv => ({
      value: tv.value,
      total: tv.total,
    })),
    totalTUH: standing.tossupsHeard,
    totalPoints: standing.totalPoints,
    powersToNegRatio: standing.powersToNegRatio,
    getsToNegRatio: standing.getsToNegRatio,
  }
}

export const mapFullIndividualStandings = standings => standings.map(playerStandings => mapSingleFullIndividualStanding(playerStandings.playerId, playerStandings.matches));

export const mapSingleFullIndividualStanding = (playerId, matches) => ({
  playerId,
  matches: Object.assign([], matches.map(match => ({
    gamePlayed: match.percentGamePlayed,
    opponentTeamId: match.opponentTeamId,
    round: match.round,
    pointsPerTossupHeard: match.pointsPerTossup,
    tossupTotals: match.tossupAnswerCounts.map(tv => ({
      answerType: tv.answerType,
      total: tv.total,
      value: tv.value,
    })),
    totalTUH: match.tossupsHeard,
    totalPoints: match.points,
    getsToNegRatio: match.getsToNegRatio,
    powersToNegRatio: match.powersToNegRatio,
  }))),
});

export default {
  mapIndividualStandings,
  mapSingleIndividualStanding,
  mapFullIndividualStandings,
  mapSingleFullIndividualStanding,
};

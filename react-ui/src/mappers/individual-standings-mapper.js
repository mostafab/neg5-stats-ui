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

export const mapFullIndividualStandings = standings => standings.map(mapSingleFullIndividualStanding);

export const mapSingleFullIndividualStanding = standing => ({
  playerId: standing.player_id,
  playerName: standing.player_name,
  teamId: standing.team_id,
  teamName: standing.team_name,
  matches: Object.assign([], standing.matches.map(match => ({
    gamePlayed: match.game_played,
    totalGets: match.gets,
    matchId: match.match_id,
    matchTossups: match.match_tossups,
    totalNegs: match.negs,
    opponentTeamId: match.opponent_team_id,
    opponentTeamName: match.opponent_team_name,
    totalPowers: match.powers,
    round: match.round,
    tossupTotals: match.tossup_totals.map(tv => ({
      answerType: tv.answer_type,
      total: tv.total,
      value: tv.value,
    })),
    totalTUH: match.tossups_heard,
    totalPoints: match.total_points,
  }))).sort((matchOne, matchTwo) => matchOne.round - matchTwo.round),
});

export default {
  mapIndividualStandings,
  mapSingleIndividualStanding,
  mapFullIndividualStandings,
  mapSingleFullIndividualStanding,
};

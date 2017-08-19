export const mapIndividualStandings = standings => standings.map(mapSingleIndividualStanding);

export const mapSingleIndividualStanding = (standing, index) => ({
  gamesPlayed: standing.games_played,
  playerId: standing.player_id,
  playerName: standing.player_name,
  ppg: standing.points_per_game,
  pointsPerTossup: standing.points_per_tossup,
  teamId: standing.team_id,
  teamName: standing.team_name,
  tossupTotals: standing.tossup_totals.map(tv => ({
    value: tv.value,
    total: tv.total,
    answerType: tv.answer_type,
  })),
  totalTUH: standing.total_player_tuh,
  totalPoints: standing.total_points,
  rank: index + 1,
});

export const mapFullIndividualStandings = standings => standings.map(mapSingleFullIndividualStanding);

export const mapSingleFullIndividualStanding = standing => ({
  playerId: standing.player_id,
  playerName: standing.player_name,
  teamId: standing.team_id,
  teamName: standing.team_name,
  matches: standing.matches.map(match => ({
    gamePlayed: match.game_played,
    gets: match.gets,
    matchId: match.match_id,
    matchTossups: match.match_tossups,
    negs: match.negs,
    opponentTeamId: match.opponent_team_id,
    opponentTeamName: match.opponent_team_name,
    powers: match.powers,
    round: match.round,
    tossupTotals: match.tossup_totals.map(tv => ({
      answerType: tv.answer_type,
      total: tv.total,
      value: tv.value,
    })),
    totalTUH: match.tossups_heard,
    totalPoints: match.total_points,
  })),
});

export default {
  mapIndividualStandings,
  mapSingleIndividualStanding,
  mapFullIndividualStandings,
  mapSingleFullIndividualStanding,
};

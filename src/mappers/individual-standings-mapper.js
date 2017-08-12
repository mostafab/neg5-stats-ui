export const mapIndividualStandings = standings => standings.map(mapSingleIndividualStanding);

export const mapSingleIndividualStanding = standing => ({
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
});

export default {
  mapIndividualStandings,
  mapSingleIndividualStanding,
};

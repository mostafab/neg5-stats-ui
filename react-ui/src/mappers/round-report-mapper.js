export const mapRoundReport = standings => {
  const mapped = Object.assign([], standings.map(mapSingleRound));
  return mapped.sort((first, second) => first.round - second.round);
}

export const mapSingleRound = standing => ({
  round: standing.round,
  averagePPG: standing.ppg_round_average,
  totalBouncebacks: standing.round_cumulative_bouncebacks,
  totalGets: standing.round_cumulative_gets,
  totalOvertime: standing.round_cumulative_overtime,
  totalScore: standing.round_cumulative_score,
  totalTossupPoints: standing.round_cumulative_tossup_points,
  ppb: standing.round_ppb,
  totalTUH: standing.round_tossups_heard,
});
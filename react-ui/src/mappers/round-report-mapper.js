import { orderBy } from 'lodash';

export const mapRoundReport = standings => {
  const mapped = Object.assign([], standings.map(mapSingleRound));
  return orderBy(mapped, ['round']);
}

export const mapSingleRound = standing => ({
  round: standing.round,
  averagePPG: standing.averagePointsPerGame,
  totalBouncebacks: standing.round_cumulative_bouncebacks,
  tossupCounts: standing.tossupAnswerCounts,
  totalScore: standing.round_cumulative_score,
  totalTossupPoints: standing.tossupPoints,
  ppb: standing.averagePointsPerBonus,
  totalTUH: standing.tossupsHeard,
  numMatches: standing.numMatches,
  tossupPointsPerTossupHeard: standing.tossupPointsPerTossupHeard,
});
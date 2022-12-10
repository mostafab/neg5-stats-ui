import { orderBy } from 'lodash';

export const mapRoundReport = standings => {
  const mapped = Object.assign([], standings.map(mapSingleRound));
  return orderBy(mapped, ['round']);
}

export const mapSingleRound = standing => ({
  round: standing.round,
  averagePPG: standing.averagePointsPerGame,
  tossupCounts: standing.tossupAnswerCounts,
  totalTossupPoints: standing.tossupPoints,
  ppb: standing.averagePointsPerBonus,
  totalTUH: standing.tossupsHeard,
  numMatches: standing.numMatches,
  tossupPointsPerTossupHeard: standing.tossupPointsPerTossupHeard,
});
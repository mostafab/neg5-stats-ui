import { round } from 'lodash';

export const getPointsPerTossupHeard = team => round(team.totalPoints / team.totalTUH, 2) || 0;

export const getPowersToNegRatio = team => round(team.totalPowers / team.totalNegs, 2) || 0;

export const getGetsToNegRatio = team => round(team.totalGets / team.totalNegs) || 0;

export const getNumberOfTossupsByValue = (pointValue, team) => {
  const pointValueTotalObject = team.tossupTotals.find(totals => totals.value === pointValue);
  if (pointValueTotalObject) {
    return pointValueTotalObject.total;
  }
  return 0;
}

export default {
  getPointsPerTossupHeard,
  getPowersToNegRatio,
  getGetsToNegRatio,
};

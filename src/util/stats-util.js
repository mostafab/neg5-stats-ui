import { round } from 'lodash';

export const getPointsPerTossupHeard = statsObj => round(statsObj.totalPoints / statsObj.totalTUH, 2) || 0;

export const getPowersToNegRatio = statsObj => round(statsObj.totalPowers / statsObj.totalNegs, 2) || 0;

export const getGetsToNegRatio = statsObj => round(statsObj.totalGets / statsObj.totalNegs) || 0;

export const getNumberOfTossupsByValue = (pointValue, statsObj) => {
  const pointValueTotalObject = statsObj.tossupTotals.find(totals => totals.value === pointValue);
  if (pointValueTotalObject) {
    return pointValueTotalObject.total;
  }
  return 0;
}

export const getPlayerPowerToNegRatio = statsObj => {
  const totalPowers = statsObj.tossupTotals
    .filter(tv => tv.answerType === 'Power')
    .reduce((total, currentTV) => total += currentTV.total, 0);
  const totalNegs = statsObj.tossupTotals
    .filter(tv => tv.answerType === 'Neg')
    .reduce((total, currentTV) => total += currentTV.total, 0);

  return round(totalPowers / totalNegs, 2) || 0;
}

export const getPlayerGetsToNegRatio = statsObj => {
  const totalGets = statsObj.tossupTotals
    .filter(tv => tv.answerType !== 'Neg')
    .reduce((total, currentTV) => total += currentTV.total, 0);
  const totalNegs = statsObj.tossupTotals
    .filter(tv => tv.answerType === 'Neg')
    .reduce((total, currentTV) => total += currentTV.total, 0);

  return round(totalGets / totalNegs, 2) || 0;
}

export const getTeamBonusesHeardInMatch = statsObj => {
  return statsObj.totalGets - statsObj.overtimeTossups;
}

export const getTeamBonusPointsInMatch = statsObj => {
  return statsObj.totalPoints - statsObj.tossupPoints - statsObj.bouncebackPoints;
}

export default {
  getPointsPerTossupHeard,
  getPowersToNegRatio,
  getGetsToNegRatio,
  getPlayerPowerToNegRatio,
  getPlayerGetsToNegRatio,
  getTeamBonusesHeardInMatch,
  getTeamBonusPointsInMatch,
};

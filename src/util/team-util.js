export const getPointsPerTossupHeard = team => team.totalPoints / team.totalTUH;

export const getPowersToNegRatio = team => team.totalPowers / team.totalNegs;

export const getGetsToNegRatio = team => team.totalGets / team.totalNegs;

export default {
  getPointsPerTossupHeard,
  getPowersToNegRatio,
  getGetsToNegRatio,
};

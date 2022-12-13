import { keyBy, mapValues, flatMap, orderBy } from "lodash";

export const getNumberOfTossupsByValue = (pointValue, statsObj) => {
  const pointValueTotalObject = statsObj.tossupTotals.find(
    (totals) => totals.value === pointValue
  );
  if (pointValueTotalObject) {
    return pointValueTotalObject.total;
  }
  return 0;
};

export const groupTeamsAndPlayers = (teams) => {
  const teamsById = keyBy(teams, "id");
  const playersById = keyBy(
    flatMap(teams, (team) => team.players),
    "id"
  );
  return {
    teams: mapValues(teamsById, (obj) => ({
      ...obj,
      players: keyBy(obj.players, "id"),
    })),
    players: playersById,
  };
};

export const usesNeg = (tossupValues) =>
  tossupValues.some((tv) => tv.answerType === "Neg");

export const enrichIndividualStats = (stats, teams, players) => {
  const results = stats.map((stat) => {
    const player = players[stat.playerId];
    let playerName = null;
    let teamName = null;
    if (player) {
      playerName = player.name;
      teamName = teams[player.teamId] ? teams[player.teamId].name : null;
    }
    return {
      ...stat,
      playerName,
      teamName,
    };
  });
  return orderBy(results, ["ppg"], ["desc"]).map((p, i) => ({
    ...p,
    rank: i + 1,
  }));
};

export const reportTypes = {
  roundReport: "round-report",
  teamStandings: "team-standings",
  teamFull: "team-full",
  individual: "individuals",
  individualFull: "player-full",
};

export default {
  groupTeamsAndPlayers,
  usesNeg,
  enrichIndividualStats,
  reportTypes,
};

import { parseInt } from 'lodash';

/**
 * Maps the response payload from the server to a data object
 * the front-end uses. 
 * @param {Object[]} allTeamStats 
 */
export const mapTeamStandings = allTeamStats => allTeamStats.map(mapSingleTeamStats);

/**
 * Maps a single team from the response payload from the server to a data object
 * the front-end uses. 
 * @param {Object} teamStats 
 */
export const mapSingleTeamStats = teamStats => ({
  divisionId: teamStats.division_id,
  divisionName: teamStats.division_name,
  losses: teamStats.losses,
  margin: teamStats.margin,
  matchesPlayed: teamStats.num_games,
  phaseId: teamStats.phase_id,
  papg: teamStats.papg,
  ppg: teamStats.ppg,
  ppb: teamStats.ppb,
  rank: parseInt(teamStats.rank),
  totalGets: teamStats.raw_total_gets,
  totalTossupPoints: teamStats.raw_total_tossup_points,
  teamId: teamStats.team_id,
  teamName: teamStats.team_name,
  ties: teamStats.ties,
  tossupTotals: teamStats.tossup_totals.map(tv => ({
    value: tv.value,
    total: tv.total,
    answerType: tv.answer_type,
  })),
  totalBouncebackPoints: teamStats.total_bounceback_points,
  totalNegs: teamStats.total_negs,
  totalOvertimeTossups: teamStats.total_overtime_tossups,
  totalPoints: teamStats.total_points,
  totalPowers: teamStats.total_powers,
  totalTUH: teamStats.total_tuh,
  winPercentage: teamStats.win_percentage,
  wins: teamStats.wins,
});

export const mapFullTeamStandings = allStats => allStats.map(mapSingleFullTeamStanding);

export const mapSingleFullTeamStanding = standing => ({
  teamId: standing.teamId,
  matches: Object.assign([], standing.matches.map(match => ({
    bouncebackPoints: match.bouncebackPoints,
    opponentId: match.opponentTeamId,
    opponentScore: match.opponentPoints,
    ppb: match.pointsPerBonus,
    result: match.result,
    round: match.round,
    totalPoints: match.points,
    tossupTotals: match.tossupAnswerCounts.map(tv => ({
      value: tv.value,
      total: tv.total,
      answerType: tv.answerType,
    })),
    totalTUH: match.tossupsHeard,
    powersToNegRatio: match.powersToNegRatio,
    getsToNegRatio: match.getsToNegRatio,
    bonusPoints: match.bonusPoints,
    bonusesHeard: match.bonusesHeard,
    pointsPerTossupHeard: match.pointsPerTossupHeard,
  }))),
});

export default {
  mapTeamStandings,
  mapSingleTeamStats,
  mapFullTeamStandings,
  mapSingleFullTeamStanding,
};

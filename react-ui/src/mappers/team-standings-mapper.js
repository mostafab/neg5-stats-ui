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
  teamName: standing.team_name,
  teamId: standing.team_id,
  matches: Object.assign([], standing.matches.map(match => ({
    bouncebackPoints: match.bounceback_points,
    matchId: match.match_id,
    opponentId: match.opponent_id,
    opponentName: match.opponent_name,
    opponentScore: match.opponent_score,
    overtimeTossups: match.overtime_tossups,
    ppb: match.ppb,
    result: match.result,
    round: match.round,
    totalPoints: match.score,
    tossupPoints: match.tossup_points,
    tossupTotals: match.tossup_totals.map(tv => ({
      value: tv.value,
      total: tv.total,
      answerType: tv.answer_type,
    })),
    totalTUH: match.tossups_heard,
    totalGets: match.total_gets,
    totalNegs: match.total_negs,
    totalPowers: match.total_powers,
  }))).sort((matchOne, matchTwo) => matchOne.round - matchTwo.round), // Sort matches by round
});

export default {
  mapTeamStandings,
  mapSingleTeamStats,
  mapFullTeamStandings,
  mapSingleFullTeamStanding,
};

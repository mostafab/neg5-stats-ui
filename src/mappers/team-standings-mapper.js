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
  tossupTotals: teamStats.tossup_totals,
  totalBouncebackPoints: teamStats.total_bounceback_points,
  totalNegs: teamStats.total_negs,
  totalOvertimeTossups: teamStats.total_overtime_tossups,
  totalPoints: teamStats.total_points,
  totalPowers: teamStats.total_powers,
  totalTUH: teamStats.total_tuh,
  winPercentage: teamStats.win_percentage,
  wins: teamStats.wins,
});

export default {
  mapTeamStandings,
  mapSingleTeamStats,
};

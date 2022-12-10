import React from 'react';
import PropTypes from 'prop-types';

import { groupBy } from 'lodash';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';

const UNASSIGNED_TEAMS_BRACKET = {
  name: 'Unassigned Teams',
  id: 'null',
};

const TeamsAggregateStatsByBracketWrapper = ({
  brackets,
  allTeamStats,
  tossupValues,
  phaseId,
  tournamentId,
  slug,
  usesNegs,
}) => {
  const groupedTeams = groupBy(allTeamStats, team => team.divisionId);
  const nonEmptyBrackets = brackets.filter(bracket => groupedTeams[bracket.id]);
  const teamsWithoutBracket = groupedTeams['null'] || [];
  return (
    <div className='TeamsAggregateStatsByBracketWrapper'>
       {
        nonEmptyBrackets.map(bracket => 
          <TeamsAggregateStatsTable key={bracket.id} allTeamStats={groupedTeams[bracket.id]} tossupValues={tossupValues}
            bracket={bracket} tournamentId={tournamentId} phaseId={phaseId} slug={slug} usesNegs={usesNegs}/> )
      }
      {
         teamsWithoutBracket.length > 0 ?
          <TeamsAggregateStatsTable key={null} allTeamStats={teamsWithoutBracket} tossupValues={tossupValues}
            bracket={UNASSIGNED_TEAMS_BRACKET} tournamentId={tournamentId} phaseId={phaseId} slug={slug} usesNegs={usesNegs}/>
          : null
      }
    </div>
  )
}

export default TeamsAggregateStatsByBracketWrapper;

import React from 'react';
import PropTypes from 'prop-types';

import { groupBy } from 'lodash';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';

const UNASSIGNED_TEAMS_BRACKET = {
  name: 'Unassigned Teams',
  id: 'null',
};

export default class TeamsAggregateStatsByBracketWrapper extends React.Component {

  static propTypes = {
    brackets: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })).isRequired,
    allTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    tossupValues: PropTypes.arrayOf(PropTypes.object).isRequired,
    tournamentId: PropTypes.string.isRequired,
    phaseId: PropTypes.string.isRequired,
  };

  render() {
    const { brackets, tossupValues, phaseId, tournamentId } = this.props;
    const groupedTeams = this.groupTeamsByBracket();
    const nonEmptyBrackets = brackets.filter(bracket => groupedTeams[bracket.id]);
    const teamsWithoutBracket = groupedTeams['null'] || [];
    return (
      <div className='TeamsAggregateStatsByBracketWrapper'>
         {
          nonEmptyBrackets.map(bracket => 
            <TeamsAggregateStatsTable key={bracket.id} allTeamStats={groupedTeams[bracket.id]} tossupValues={tossupValues}
              bracket={bracket} tournamentId={tournamentId} phaseId={phaseId}/> )
        }
        {
           teamsWithoutBracket.length > 0 ?
            <TeamsAggregateStatsTable key={null} allTeamStats={teamsWithoutBracket} tossupValues={tossupValues}
              bracket={UNASSIGNED_TEAMS_BRACKET} tournamentId={tournamentId} phaseId={phaseId} />
            : null
        }
      </div>
    )
  }

  groupTeamsByBracket() {
    return groupBy(this.props.allTeamStats, team => team.divisionId);
  }

};
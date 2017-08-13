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
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
    tournamentId: PropTypes.string.isRequired,
    phaseId: PropTypes.string.isRequired,
  };

  render() {
    const { brackets, allTeamStats, pointScheme, phaseId, tournamentId } = this.props;
    const groupedTeams = this.groupTeamsByBracket();
    const nonEmptyBrackets = brackets.filter(bracket => groupedTeams[bracket.id]);
    const teamsWithoutBracket = groupedTeams['null'] || [];
    return (
      <div>
         {
          nonEmptyBrackets.map(bracket => 
            <TeamsAggregateStatsTable key={bracket.id} allTeamStats={groupedTeams[bracket.id]} pointScheme={pointScheme}
              bracket={bracket} tournamentId={tournamentId} phaseId={phaseId}/> )
        }
        {
           teamsWithoutBracket.length > 0 ?
            <TeamsAggregateStatsTable key={null} allTeamStats={teamsWithoutBracket} pointScheme={pointScheme}
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
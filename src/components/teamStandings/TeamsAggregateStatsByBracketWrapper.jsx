import React from 'react';
import PropTypes from 'prop-types';

import { groupBy } from 'lodash';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';

export default class TeamsAggregateStatsByBracketWrapper extends React.Component {

  render() {
    const { brackets, allTeamStats, pointScheme } = this.props;
    const groupedTeams = this.groupTeamsByBracket();
    const nonEmptyBrackets = brackets.filter(bracket => groupedTeams[bracket.id]);
    const teamsWithoutBracket = groupedTeams['null'] || [];
    return (
      <div>
         {
          nonEmptyBrackets.map(bracket => 
            <TeamsAggregateStatsTable key={bracket.id} allTeamStats={groupedTeams[bracket.id]} pointScheme={pointScheme} bracket={bracket} /> )
        }
      </div>
    )
  }

  groupTeamsByBracket() {
    return groupBy(this.props.allTeamStats, team => team.divisionId);
  }

};

TeamsAggregateStatsByBracketWrapper.propTypes = {
  brackets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  allTeamStats: PropTypes.arrayOf(PropTypes.object),
  pointScheme: PropTypes.arrayOf(PropTypes.object),
};

TeamsAggregateStatsByBracketWrapper.defaultProps = {
  brackets: [],
  allTeamStats: [],
  pointScheme: [],
};

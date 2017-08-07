import React from 'react';
import PropTypes from 'prop-types';

import { groupBy } from 'lodash';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';

export default class TeamsAggregateStatsByBracketWrapper extends React.Component {

  render() {
    const { brackets, teamStats, pointScheme } = this.props;
    const groupedTeams = this.groupTeamsByBracket();
    const teamsWithoutBracket = groupedTeams['null'] || [];
    return (
      <div>
        {
          brackets.map(bracket =>
            <TeamsAggregateStatsTable teamStats={groupedTeams[bracket.name]} pointScheme={pointScheme} bracket={bracket}/> )
        }
      </div>
    )
  }

  groupTeamsByBracket() {
    return groupBy(this.teamStats, team => team.divisionId);
  }

};

TeamsAggregateStatsByBracketWrapper.propTypes = {
  brackets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  teamStats: PropTypes.arrayOf(PropTypes.object),
  pointScheme: PropTypes.arrayOf(PropTypes.object),
};

TeamsAggregateStatsByBracketWrapper.defaultProps = {
  brackets: [],
  teamStats: [],
  pointScheme: [],
};

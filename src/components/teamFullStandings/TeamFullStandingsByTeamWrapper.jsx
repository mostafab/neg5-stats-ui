import React from 'react';
import PropTypes from 'prop-types';

import SingleTeamFullStandingsTable from './SingleTeamFullStandingsTable';

export default class TeamFullStandingsByTeamWrapper extends React.Component {

  static propTypes = {
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
    fullTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { pointScheme, fullTeamStats } = this.props;
    return (
      <div>
      {
        fullTeamStats.map(team => <SingleTeamFullStandingsTable key={team.teamId} pointScheme={pointScheme} fullTeamStats={team} />)
      }
      </div>
    )
  }
};

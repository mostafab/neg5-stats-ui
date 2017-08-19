import React from 'react';
import PropTypes from 'prop-types';

import SingleTeamFullStandingsTable from './SingleTeamFullStandingsTable';

export default class TeamFullStandingsByTeamWrapper extends React.Component {

  static propTypes = {
    tossupValues: PropTypes.arrayOf(PropTypes.object).isRequired,
    fullTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { tossupValues, fullTeamStats } = this.props;
    return (
      <div>
      {
        fullTeamStats
          .filter(team => team.matches.length > 0)
          .map(team => <SingleTeamFullStandingsTable key={team.teamId} tossupValues={tossupValues} fullTeamStats={team} />)
      }
      </div>
    )
  }
};

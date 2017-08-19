import React from 'react';
import PropTypes from 'prop-types';

import SingleIndividualFullStandingsTable from './SingleIndividualFullStandingsTable';

export default class IndividualFullStandingsByPlayerWrapper extends React.Component {

  static propTypes = {
    fullIndividualStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { playerStats, pointScheme } = this.props;
    return (
      <div>
        {
          this.props.fullIndividualStats
            .filter(player => player.matches.length > 0)
            .map(player => <SingleIndividualFullStandingsTable key={ player.playerId } playerStats={ player } pointScheme={ pointScheme }/>)
        }
      </div>
    )
  }
};

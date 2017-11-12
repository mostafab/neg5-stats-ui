import React from 'react';
import PropTypes from 'prop-types';

import SingleTeamFullStandingsTable from './SingleTeamFullStandingsTable';

export default class TeamFullStandingsByTeamWrapper extends React.Component {

  static propTypes = {
    tossupValues: PropTypes.arrayOf(PropTypes.object).isRequired,
    fullTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    individualStatsByTeam: PropTypes.object.isRequired,
    tournamentId: PropTypes.string.isRequired,
    phaseId: PropTypes.string.isRequired,
    bouncebacks: PropTypes.bool.isRequired,
  }

  render() {
    const { tossupValues, fullTeamStats, individualStatsByTeam, tournamentId, phaseId, slug, bouncebacks } = this.props;
    return (
      <div className='TeamFullStandingsByTeamWrapper'>
      {
        fullTeamStats
          .filter(team => team.matches.length > 0)
          .map(team => <SingleTeamFullStandingsTable slug={slug} key={team.teamId} tossupValues={tossupValues} phaseId={phaseId} fullTeamStats={team} tournamentId={tournamentId}
            players={individualStatsByTeam[team.teamId] || [] } bouncebacks={bouncebacks}/>)
      }
      </div>
    )
  }
};

import React from 'react';

import SingleIndividualFullStandingsTable from './SingleIndividualFullStandingsTable';

const IndividualFullStandingsByPlayerWrapper = ({
  tossupValues,
  fullIndividualStats,
  usesNegs,
}) => (
  <div className='IndividualFullStandingsByPlayerWrapper'>
    {
      fullIndividualStats
        .filter(player => player.matches.length > 0)
        .map(player =>
          <SingleIndividualFullStandingsTable
            key={player.playerId}
            playerStats={player}
            tossupValues={tossupValues}
            usesNegs={usesNegs}/>
        )
    }
  </div>
)

export default IndividualFullStandingsByPlayerWrapper;

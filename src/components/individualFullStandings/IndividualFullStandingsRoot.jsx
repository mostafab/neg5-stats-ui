import React from 'react';

import PhaseSelector from '../../containers/common/PhaseSelector';
import StandingsNavigation from '../../../src/components/StandingsNavigation';

import IndividualFullStandingsContent from './IndividualFullStandingsContent';
import { reportTypes } from '../../util/stats-util';

const IndividualFullStandingsRoot = ({
  fullIndividualStats,
  tossupValues,
  tournamentInfo,
  usesNegs,
  selectedPhaseId,
}) => (
  <>
    <PhaseSelector statType={reportTypes.individualFull}/>
    <StandingsNavigation
      slug={tournamentInfo.slug}
      tournamentId={tournamentInfo.id}
      phaseId={selectedPhaseId}
      reportType={reportTypes.individualFull} />
    <div className='IndividualFullStandingsRoot stats-content'>
      <h3> { tournamentInfo.name || ''} Full Player Standings </h3>
      <IndividualFullStandingsContent
        fullIndividualStats={fullIndividualStats}
        tossupValues={tossupValues}
        usesNegs={usesNegs}
      />
    </div>
  </>
);

export default IndividualFullStandingsRoot;


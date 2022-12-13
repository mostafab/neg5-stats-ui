import React from 'react';

import PhaseSelector from '../../containers/common/PhaseSelector';
import StandingsNavigation from '../../../src/components/StandingsNavigation';
import { reportTypes } from '../../util/stats-util';

import TeamFullStandingsContent from './TeamFullStandingsContent';

const TeamFullStandingsRoot = ({
  fullTeamStats,
  tossupValues,
  individualStatsByTeam,
  selectedPhaseId,
  tournamentInfo,
  usesNegs,
}) => {
  const { id: tournamentId, slug } = tournamentInfo;
  return (
    <>
      <PhaseSelector statType={reportTypes.teamFull} />
      <StandingsNavigation
        slug={slug}
        tournamentId={tournamentId}
        phaseId={selectedPhaseId}
        reportType={reportTypes.teamFull} />
      <div className='TeamFullStandingsRoot stats-content'>
        <h3> { tournamentInfo.name || ''} Full Team Standings </h3>
        <TeamFullStandingsContent
          slug={slug}
          fullTeamStats={fullTeamStats}
          tossupValues={tossupValues}
          individualStatsByTeam={individualStatsByTeam}
          tournamentId={tournamentId}
          phaseId={selectedPhaseId}
          bouncebacks={tournamentInfo.bouncebacks || false}
          usesNegs={usesNegs}
        />
      </div>
    </>
  )
}

export default TeamFullStandingsRoot;

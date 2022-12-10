import React from 'react';
import TeamStandingsContent from './TeamStandingsContent';

import PhaseSelector from '../../containers/common/PhaseSelector';
import StandingsNavigation from '../../../src/components/StandingsNavigation';
import { reportTypes } from './../../util/stats-util';

const TeamStandingsRoot = ({
  allTeamStats,
  brackets,
  selectedPhaseId,
  tossupValues,
  tournamentInfo,
  usesNegs,
}) => {
  let title = `Team Standings`;
  if (tournamentInfo) {
    title = `${tournamentInfo.name || ''} Team Standings`;
  }
  const slug = tournamentInfo.slug;
  return (
    <>
      <PhaseSelector statType={reportTypes.teamStandings} />
      <StandingsNavigation
        slug={slug}
        tournamentId={tournamentInfo.id}
        phaseId={selectedPhaseId}
        reportType={reportTypes.teamStandings} />
      <div className='TeamStandingsRoot stats-content '>
        <h3> { title } </h3>
        <TeamStandingsContent
          allTeamStats={ allTeamStats }
          brackets={ brackets }
          tournamentId={tournamentInfo.id}
          phaseId={ selectedPhaseId }
          tossupValues={tossupValues}
          slug={slug}
          usesNegs={usesNegs} />
      </div>
    </>
  )
}

export default TeamStandingsRoot;



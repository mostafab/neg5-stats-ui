import React from "react";

import PhaseSelector from "../../containers/common/PhaseSelector";
import StandingsNavigation from "../../../src/components/StandingsNavigation";
import { reportTypes } from "../../util/stats-util";

import IndividualStandingsContent from "./IndividualStandingsContent";

const IndividualStandingsRoot = ({
  individualStats,
  selectedPhaseId,
  tossupValues,
  tournamentInfo,
  usesNegs,
}) => (
  <>
    <PhaseSelector statType={reportTypes.individual} />
    <StandingsNavigation
      slug={tournamentInfo.slug}
      tournamentId={tournamentInfo.id}
      phaseId={selectedPhaseId}
      reportType={reportTypes.individual}
    />
    <div className="IndividualStandingsRoot stats-content">
      <h3> {tournamentInfo.name || ""} Individual Standings </h3>
      <IndividualStandingsContent
        slug={tournamentInfo.slug}
        individualStats={individualStats}
        phaseId={selectedPhaseId}
        tournamentId={tournamentInfo.id}
        usesNegs={usesNegs}
        tossupValues={tossupValues}
      />
    </div>
  </>
);

export default IndividualStandingsRoot;

import React from "react";

import PhaseSelector from "../../containers/common/PhaseSelector";
import StandingsNavigation from "../../../src/components/StandingsNavigation";
import { reportTypes } from "./../../util/stats-util";

import RoundReportContent from "./RoundReportContent";

const RoundReportRoot = ({
  roundReportStats,
  tournamentInfo,
  selectedPhaseId,
}) => (
  <>
    <PhaseSelector statType={reportTypes.roundReport} />
    <StandingsNavigation
      slug={tournamentInfo.slug}
      tournamentId={tournamentInfo.id}
      phaseId={selectedPhaseId}
      reportType={reportTypes.roundReport}
    />
    <div className="RoundReportRoot stats-content">
      <h3> {tournamentInfo.name || ""} Round Report </h3>
      <RoundReportContent roundReportStats={roundReportStats} />
    </div>
  </>
);

export default RoundReportRoot;

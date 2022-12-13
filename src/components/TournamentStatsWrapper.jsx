import React from "react";

import PhaseSelector from "../containers/common/PhaseSelector";
import StandingsNavigation from "./StandingsNavigation";

const TournamentStatsWrapper = ({ loadedTournament: tournament }) => {
  return (
    <main className="TournamentStatsWrapper">
      <PhaseSelector />
      <StandingsNavigation tournamentId={tournament.id} phaseId={null} />
    </main>
  );
};

export default TournamentStatsWrapper;

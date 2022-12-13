import React from "react";

import SingleTeamFullStandingsTable from "./SingleTeamFullStandingsTable";

const TeamFullStandingsByTeamWrapper = ({
  tossupValues,
  fullTeamStats,
  individualStatsByTeam,
  tournamentId,
  phaseId,
  slug,
  bouncebacks,
  usesNegs,
}) => (
  <div className="TeamFullStandingsByTeamWrapper">
    {fullTeamStats
      .filter((team) => team.matches.length > 0)
      .map((team) => (
        <SingleTeamFullStandingsTable
          slug={slug}
          key={team.teamId}
          tossupValues={tossupValues}
          phaseId={phaseId}
          fullTeamStats={team}
          tournamentId={tournamentId}
          players={individualStatsByTeam[team.teamId] || []}
          bouncebacks={bouncebacks}
          usesNegs={usesNegs}
        />
      ))}
  </div>
);

export default TeamFullStandingsByTeamWrapper;

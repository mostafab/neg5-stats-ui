import React from "react";
import { Row, Col } from "react-bootstrap";

import TeamFullStandingsByTeamWrapper from "./TeamFullStandingsByTeamWrapper";

const TeamFullStandingsContent = ({
  tossupValues,
  tournamentId,
  phaseId,
  fullTeamStats,
  individualStatsByTeam,
  slug,
  bouncebacks,
  usesNegs,
}) => (
  <Row className="TeamFullStandingsContent">
    <Col lg={12} md={12} sm={12}>
      <TeamFullStandingsByTeamWrapper
        slug={slug}
        tournamentId={tournamentId}
        phaseId={phaseId}
        tossupValues={tossupValues}
        fullTeamStats={fullTeamStats}
        individualStatsByTeam={individualStatsByTeam}
        bouncebacks={bouncebacks}
        usesNegs={usesNegs}
      />
    </Col>
  </Row>
);

export default TeamFullStandingsContent;

import React from "react";
import { Row, Col } from "react-bootstrap";

import IndividualStatsTable from "./IndividualStatsTable";

const IndividualStandingsContent = ({
  individualStats,
  phaseId,
  tournamentId,
  tossupValues,
  slug,
  usesNegs,
}) => (
  <Row className="IndividualStandingsContent">
    <Col lg={12} md={12} sm={12}>
      <IndividualStatsTable
        slug={slug}
        individualStats={individualStats}
        phaseId={phaseId}
        tournamentId={tournamentId}
        usesNegs={usesNegs}
        tossupValues={tossupValues}
      />
    </Col>
  </Row>
);

export default IndividualStandingsContent;

import React from 'react';
import { Row, Col } from 'react-bootstrap';

import IndividualFullStandingsByPlayerWrapper from './IndividualFullStandingsByPlayerWrapper';

const IndividualFullStandingsContent = ({
  fullIndividualStats,
  tossupValues,
  usesNegs,
}) => (
  <Row className='IndividualFullStandingsContent'>
    <Col lg={12} md={12} sm={12}>
      <IndividualFullStandingsByPlayerWrapper
        fullIndividualStats={fullIndividualStats}
        tossupValues={tossupValues}
        usesNegs={usesNegs}
      />
    </Col>
  </Row>
)

export default IndividualFullStandingsContent;


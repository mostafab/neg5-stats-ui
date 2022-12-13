import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RoundReportTable from './RoundReportTable';

const RoundReportContent = ({
  roundReportStats
}) => (
  <Row className='RoundReportContent'>
    <Col lg={12} md={12} sm={12}>
      <RoundReportTable roundReportStats={ roundReportStats }/>
    </Col>
  </Row>
)

export default RoundReportContent;


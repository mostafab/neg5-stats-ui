import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import RoundReportTable from './RoundReportTable';

export default class RoundReportContent extends React.Component {

  static propTypes = {
    roundReportStats: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { roundReportStats } = this.props;
    return (
      <Row className='RoundReportContent'>
        <Col lg={12} md={12} sm={12}>
          <RoundReportTable roundReportStats={ roundReportStats }/>
        </Col>
      </Row>
    )
  }


};

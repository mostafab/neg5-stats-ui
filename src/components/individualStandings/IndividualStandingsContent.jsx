import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import IndividualStatsTable from './IndividualStatsTable';

export default class IndividualStandingsContent extends React.Component {

  static propTypes = {
    individualStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    phaseId: PropTypes.string.isRequired,
    tournamentId: PropTypes.string.isRequired,
    tossupValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { individualStats, phaseId, tournamentId, tossupValues } = this.props;
    return (
      <Row>
        <Col lg={12} md={12} sm={12}>
          <IndividualStatsTable individualStats={ individualStats } phaseId={ phaseId } tournamentId={ tournamentId } tossupValues={ tossupValues }/>
        </Col>
      </Row>
    )
  }
};

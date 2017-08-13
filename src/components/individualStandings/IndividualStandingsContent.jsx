import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import IndividualStatsTable from './IndividualStatsTable';

export default class IndividualStandingsContent extends React.Component {

  static propTypes = {
    individualStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    phaseId: PropTypes.string.isRequired,
    tournamentId: PropTypes.string.isRequired,
  }

  render() {
    const { individualStats, phaseId, tournamentId } = this.props;
    return (
      <Row>
        <Col lg={12} md={12} sm={12}>
          <IndividualStatsTable individualStats={ individualStats } phaseId={ phaseId } tournamentId={ tournamentId }/>
        </Col>
      </Row>
    )
  }
};

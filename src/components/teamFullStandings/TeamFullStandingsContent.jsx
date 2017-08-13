import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import TeamFullStandingsByTeamWrapper from './TeamFullStandingsByTeamWrapper';

export default class TeamFullStandingsContent extends React.Component {
  
  static propTypes = {
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
    fullTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { pointScheme, fullTeamStats } = this.props;
    return (
      <Row>
        <Col lg={12} md={12} sm={12}>
          <TeamFullStandingsByTeamWrapper pointScheme={pointScheme} fullTeamStats={fullTeamStats}/>
        </Col>
      </Row>
    )
  }
}
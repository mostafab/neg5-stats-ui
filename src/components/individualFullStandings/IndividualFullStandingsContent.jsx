import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import IndividualFullStandingsByPlayerWrapper from './IndividualFullStandingsByPlayerWrapper';

export default class IndividualFullStandingsContent extends React.Component {

  static propTypes = {
    fullIndividualStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { fullIndividualStats, pointScheme } = this.props;
    return (
      <Row>
        <Col lg={12} md={12} sm={12}>
          <IndividualFullStandingsByPlayerWrapper fullIndividualStats={ fullIndividualStats } pointScheme={ pointScheme }/>
        </Col>
      </Row>
    )
  }
};

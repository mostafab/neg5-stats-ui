import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';

export default class TeamStandingsContent extends React.Component {

  render() {
    const { divisions, teamStats } = this.props;
    console.log(divisions);
    let standingsComponent;
    if (divisions.length === 0) {
      standingsComponent = <TeamsAggregateStatsTable teamStats={teamStats} pointScheme={[ { value: 10 }, { value: 15 }]}/>
    } else {
      
    }
    return (
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div style={{ padding: '50px' }}>
            { standingsComponent }
          </div>
        </Col>
      </Row>
    )
  }
};

TeamStandingsContent.propTypes = {
  teamStats: PropTypes.arrayOf(PropTypes.object),
  divisions: PropTypes.arrayOf(PropTypes.object),
  pointScheme: PropTypes.arrayOf(PropTypes.object),
};

TeamStandingsContent.defaultProps = {
  divisions: [],
  teamStats: [],
  pointScheme: [],
};





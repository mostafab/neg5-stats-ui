import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';
import TeamsAggregateStatsByBracketWrapper from './TeamsAggregateStatsByBracketWrapper';

const POINT_SCHEME = [ { value: 10 }, { value: 15 } ];

export default class TeamStandingsContent extends React.Component {

  render() {
    const { brackets, teamStats } = this.props;
    let standingsComponent;
    if (brackets.length === 0) {
      standingsComponent = <TeamsAggregateStatsTable teamStats={teamStats} pointScheme={POINT_SCHEME}/>
    } else {
      standingsComponent = <TeamsAggregateStatsByBracketWrapper teamStats={teamStats} pointScheme={POINT_SCHEME} brackets={brackets} />
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
  teamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
  brackets: PropTypes.arrayOf(PropTypes.object).isRequired,
  pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TeamStandingsContent.defaultProps = {
  brackets: [],
  teamStats: [],
  pointScheme: [],
};





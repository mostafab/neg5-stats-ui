import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';
import TeamsAggregateStatsByBracketWrapper from './TeamsAggregateStatsByBracketWrapper';

const POINT_SCHEME = [ { value: 10 }, { value: 15 }, { value: -5 } ];

export default class TeamStandingsContent extends React.Component {

  static propTypes = {
    allTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    brackets: PropTypes.arrayOf(PropTypes.object).isRequired,
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
    tournamentId: PropTypes.string.isRequired,
    phaseId: PropTypes.string.isRequired,
  }

  static defaultProps = {
    brackets: [],
    allTeamStats: [],
    pointScheme: [],
  }

  render() {
    const { brackets, allTeamStats } = this.props;
    let standingsComponent;
    if (brackets.length === 0) {
      const allTeamsBracket = {
        id: 'allTeams',
        name: 'All Teams',
      };
      standingsComponent = <TeamsAggregateStatsTable allTeamStats={allTeamStats} pointScheme={POINT_SCHEME} bracket={ allTeamsBracket } />
    } else {
      standingsComponent = <TeamsAggregateStatsByBracketWrapper allTeamStats={allTeamStats} pointScheme={POINT_SCHEME} brackets={brackets} />
    }
    return (
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div>
            { standingsComponent }
          </div>
        </Col>
      </Row>
    )
  }
};


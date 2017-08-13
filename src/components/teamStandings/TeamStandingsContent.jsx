import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';
import TeamsAggregateStatsByBracketWrapper from './TeamsAggregateStatsByBracketWrapper';

export default class TeamStandingsContent extends React.Component {

  static propTypes = {
    allTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    brackets: PropTypes.arrayOf(PropTypes.object).isRequired,
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
    tournamentId: PropTypes.string.isRequired,
    phaseId: PropTypes.string.isRequired,
  }

  render() {
    const { brackets, allTeamStats, tournamentId, phaseId, pointScheme } = this.props;
    let standingsComponent;
    if (brackets.length === 0) {
      const allTeamsBracket = {
        id: 'allTeams',
        name: 'All Teams',
      };
      standingsComponent = <TeamsAggregateStatsTable allTeamStats={allTeamStats} pointScheme={pointScheme}
        bracket={ allTeamsBracket } tournamentId={ tournamentId } phaseId={ phaseId }/>
    } else {
      standingsComponent = <TeamsAggregateStatsByBracketWrapper allTeamStats={allTeamStats} pointScheme={pointScheme}
        brackets={brackets} tournamentId={ tournamentId } phaseId={ phaseId }/>
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


import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TeamsAggregateStatsTable from './TeamsAggregateStatsTable';
import TeamsAggregateStatsByBracketWrapper from './TeamsAggregateStatsByBracketWrapper';

export default class TeamStandingsContent extends React.Component {

  static propTypes = {
    allTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    brackets: PropTypes.arrayOf(PropTypes.object).isRequired,
    tossupValues: PropTypes.arrayOf(PropTypes.object).isRequired,
    tournamentId: PropTypes.string.isRequired,
    phaseId: PropTypes.string,
    slug: PropTypes.string.isRequired,
  }

  render() {
    const { brackets, allTeamStats, tournamentId, phaseId, tossupValues, slug } = this.props;
    let standingsComponent;
    if (brackets.length === 0) {
      const allTeamsBracket = {
        id: 'allTeams',
        name: 'All Teams',
      };
      standingsComponent = <TeamsAggregateStatsTable allTeamStats={allTeamStats} tossupValues={tossupValues}
        bracket={ allTeamsBracket } tournamentId={ tournamentId } phaseId={ phaseId } slug={slug}/>
    } else {
      standingsComponent = <TeamsAggregateStatsByBracketWrapper allTeamStats={allTeamStats} tossupValues={tossupValues}
        brackets={brackets} tournamentId={ tournamentId } phaseId={ phaseId } slug={slug}/>
    }
    return (
      <Row className='TeamStandingsContent'>
        <Col lg={12} md={12} sm={12}>
          <div>
            { standingsComponent }
          </div>
        </Col>
      </Row>
    )
  }
};


import React from 'react';
import { Route, Switch } from 'react-router-dom';
import queryString from 'query-string';

import TeamStandingsRoot from './../containers/home/TeamStandings';
import PhaseSelector from './../containers/phase-selector/PhaseSelector';
import StandingsNavigation from './StandingsNavigation';

export default class TournamentStatsWrapper extends React.Component {

  componentDidMount() {
    const { getTournamentPhases, match, location, setInitialPhaseOnLoad } = this.props;
    const queryParams = queryString.parse(location.search);
    const phaseId = queryParams.phase || '';
    const tournamentId = match.params.tournamentId;
    setInitialPhaseOnLoad(phaseId);
    getTournamentPhases(tournamentId);
  }

  render() {
    console.log(this.props);
    return (
      <main style={{ padding: '50px', paddingTop: '0px' }}>
        <PhaseSelector match={ this.props.match } location={ this.props.location }/>
        <StandingsNavigation tournamentId={this.props.match.params.tournamentId} phaseId={ this.props.selectedPhaseId }/>
        <Switch>
          <Route exact path='/t/:tournamentId/' component={ TeamStandingsRoot }/>
          <Route exact path='/t/:tournamentId/team-standings' component={ TeamStandingsRoot }/>
        </Switch>
      </main>
    );
  }
};

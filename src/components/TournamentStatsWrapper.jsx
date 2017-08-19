import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import queryString from 'query-string';

import TeamStandingsRoot from './../containers/home/TeamStandings';
import IndividualStandingsRoot from './../containers/home/IndividualStandings';
import TeamFullStandingsRoot from './../containers/home/TeamFullStandings';
import IndividualFullStandingsRoot from '../containers/home/IndividualFullStandings';
import RoundReportRoot from '../containers/home/RoundReport';
import PhaseSelector from './../containers/phase-selector/PhaseSelector';
import StandingsNavigation from './StandingsNavigation';

export default class TournamentStatsWrapper extends React.Component {

  componentDidMount() {
    const { getTournamentPhases, match, location, setInitialPhaseOnLoad, getTournamentTossupValues } = this.props;
    const queryParams = queryString.parse(location.search);
    const phaseId = queryParams.phase || '';
    const tournamentId = match.params.tournamentId;
    setInitialPhaseOnLoad(phaseId);
    getTournamentPhases(tournamentId);
    getTournamentTossupValues(tournamentId);
  }

  render() {
    const tournamentId = this.props.match.params.tournamentId;
    const redirectUrl = `/t/${tournamentId}/team-standings${this.props.location.search}`;
    return (
      <main>
        <PhaseSelector match={ this.props.match } location={ this.props.location } />
        <StandingsNavigation tournamentId={tournamentId} phaseId={ this.props.selectedPhaseId } location={ this.props.location }/>
        <Switch>
          <Redirect exact from='/t/:tournamentId' to={redirectUrl} />
          <Route exact path='/t/:tournamentId/team-standings' component={ TeamStandingsRoot }/>
          <Route exact path='/t/:tournamentId/individuals' component={ IndividualStandingsRoot }/>
          <Route exact path='/t/:tournamentId/team-full' component= { TeamFullStandingsRoot } />
          <Route exact path='/t/:tournamentId/player-full' component={ IndividualFullStandingsRoot } />
          <Route exact path='/t/:tournamentId/round-report' component={ RoundReportRoot } />
        </Switch>
      </main>
    );
  }
};

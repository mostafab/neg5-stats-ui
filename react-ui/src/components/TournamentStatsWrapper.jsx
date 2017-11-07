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
    const slug = this.props.match.params.slug;
    const redirectUrl = `/t/${tournamentId}/${slug}/team-standings${this.props.location.search}`;
    return (
      <main className='TournamentStatsWrapper'>
        <PhaseSelector match={ this.props.match } location={ this.props.location } />
        <StandingsNavigation tournamentId={tournamentId} phaseId={ this.props.selectedPhaseId } location={ this.props.location } slug={slug}/>
        <Switch>
          <Redirect exact from='/t/:tournamentId/:slug' to={redirectUrl} />
          <Redirect exact from='/t/:tournamentId/:slug/stats' to={redirectUrl} />
          <Route exact path='/t/:tournamentId/:slug/team-standings' component={ TeamStandingsRoot }/>
          <Route exact path='/t/:tournamentId/:slug/individuals' component={ IndividualStandingsRoot }/>
          <Route exact path='/t/:tournamentId/:slug/team-full' component= { TeamFullStandingsRoot } />
          <Route exact path='/t/:tournamentId/:slug/player-full' component={ IndividualFullStandingsRoot } />
          <Route exact path='/t/:tournamentId/:slug/round-report' component={ RoundReportRoot } />
        </Switch>
      </main>
    );
  }
};

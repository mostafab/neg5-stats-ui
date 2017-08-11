import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
    const tournamentId = this.props.match.params.tournamentId;
    const redirectUrl = `/t/${tournamentId}/team-standings${this.props.location.search}`;
    return (
      <main style={{ padding: '50px', paddingTop: '0px' }}>
        <PhaseSelector match={ this.props.match } location={ this.props.location }/>
        <StandingsNavigation tournamentId={tournamentId} phaseId={ this.props.selectedPhaseId } location={ this.props.location }/>
        <Switch>
          {/* <Route exact path='/t/:tournamentId/'  component={ TeamStandingsRoot }/> */}
          <Redirect exact from='/t/:tournamentId' to={redirectUrl} />
          <Route exact path='/t/:tournamentId/team-standings' component={ TeamStandingsRoot }/>
        </Switch>
      </main>
    );
  }
};

import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Grid } from 'react-bootstrap';

import TeamStandingsRoot from '../home'
import TopNavbar from './../../components/TopNavbar';

const Main = () => (
  <main>
  </main>
);

const ReportSwitch = () => (
  <Switch>
    <Route path='/t/:tournamentId' component={ Main } />
    <Route exact path='/t/:tournamentId/team-standings' component={ TeamStandingsRoot }/>
  </Switch>
);

const TournamentSwitch = () => (
  <Switch>
    <Route exact path='/t' component={ Main }/>
    <Route exact path='/t/:tournamentId' component={ ReportSwitch }/>
  </Switch>
);

const App = () => (
  <BrowserRouter>
    <div>
      <TopNavbar />
      <Grid>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/t' component={Main}/>
          <Route exact path='/t/:tournamentId' component={ TeamStandingsRoot }/>
          <Route exact path='/t/:tournamentId/team-standings' component={ TeamStandingsRoot }/> 
        </Switch>
      </Grid>
    </div>
  </BrowserRouter>
);

export default App;


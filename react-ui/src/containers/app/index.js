import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TopNavbar from './../../components/TopNavbar';
import TournamentStatsWrapper from '../tournament-wrapper/TournamentWrapper';
import LandingPageRoot from './../tournament-wrapper/LandingPageWrapper';

const App = () => (
  <BrowserRouter>
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path='/' component={ LandingPageRoot } />
        <Route exact path='/t' component={ LandingPageRoot }/>
        <Route path='/t/:tournamentId' component={ TournamentStatsWrapper }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;


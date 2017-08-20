import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TopNavbar from './../../components/TopNavbar';
import TournamentStatsWrapper from '../tournament-wrapper/TournamentWrapper';
import LandingPageWrapper from './../tournament-wrapper/LandingPageWrapper';

const App = () => (
  <BrowserRouter>
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path='/' component={ LandingPageWrapper } />
        <Route exact path='/t' component={ LandingPageWrapper }/>
        <Route path='/t/:tournamentId' component={ TournamentStatsWrapper }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;


import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TopNavbar from './../../components/TopNavbar';
import TournamentStatsWrapper from '../tournament-wrapper/TournamentWrapper';

const Main = () => (
  <main>
  </main>
);

const App = () => (
  <BrowserRouter>
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path='/' component={ Main } />
        <Route exact path='/t' component={Main}/>
        <Route path='/t/:tournamentId' component={ TournamentStatsWrapper }/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;


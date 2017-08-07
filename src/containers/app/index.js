import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import TeamStandingsRoot from '../home/TeamStandings';
import TopNavbar from './../../components/TopNavbar';

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
          <Route exact path='/t/:tournamentId' component={ TeamStandingsRoot }/>
          <Route exact path='/t/:tournamentId/team-standings' component={ TeamStandingsRoot }/> 
        </Switch>
    </div>
  </BrowserRouter>
);

export default App;


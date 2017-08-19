import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import teamStandings from './teamStandings/reducers';
import individualStandings from './individualStandings/reducers';
import teamFullStandings from './fullTeamStandings/reducers';
import individualFullStandings from './fullIndividualStandings/reducers';
import roundReport from './roundReport/reducers';
import globalState from './tournamentStatsWrapper/reducers';

export default combineReducers({
  router: routerReducer,
  teamStandings,
  individualStandings,
  teamFullStandings,
  individualFullStandings,
  roundReport,
  globalState,
});


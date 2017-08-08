import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import teamStandings from './teamStandings/reducers';
import globalState from './tournamentStatsWrapper/reducers';

export default combineReducers({
  router: routerReducer,
  teamStandings,
  globalState,
});


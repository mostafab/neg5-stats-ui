import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import teamStandings from './teamStandings/reducers';

export default combineReducers({
  router: routerReducer,
  teamStandings,
});


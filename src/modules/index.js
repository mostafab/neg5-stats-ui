import { combineReducers } from "redux";
import teamStandings from "./teamStandings/reducers";
import individualStandings from "./individualStandings/reducers";
import teamFullStandings from "./fullTeamStandings/reducers";
import individualFullStandings from "./fullIndividualStandings/reducers";
import roundReport from "./roundReport/reducers";
import landingPage from "./landingPage/reducers";
import globalState from "./tournamentStatsWrapper/reducers";

export default combineReducers({
  teamStandings,
  individualStandings,
  teamFullStandings,
  individualFullStandings,
  roundReport,
  landingPage,
  globalState,
});

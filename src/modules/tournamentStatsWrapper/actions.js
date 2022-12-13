import tournamentClient from "client/tournament-client";
import teamClient from "client/team-client";
import { mapPhases } from "mappers/phase-mapper";
import { mapSingleTournament } from "mappers/tournaments-mapper";
import { mapTossupValues } from "mappers/point-scheme-mapper";
import { mapBrackets } from "mappers/brackets-mapper";
import { groupTeamsAndPlayers } from "util/stats-util";

import {
  BRACKETS_RECEIVED,
  requestTeamStandings,
} from "modules/teamStandings/actions";
import { requestFullTeamStandings } from "modules/fullTeamStandings/actions";
import { getIndividualStandings } from "modules/individualStandings/actions";
import { requestFullIndividualStandings } from "modules/fullIndividualStandings/actions";
import { getRoundReport } from "modules/roundReport/actions";
import { reportTypes } from "util/stats-util";

const ROOT = "tournamentStatsWrapper/";

export const TOURNAMENT_INFO_REQUESTED = `${ROOT}TOURNAMENT_INFO_REQUESTED`;
export const TOURNAMENT_INFO_RECEIVED = `${ROOT}TOURNAMENT_INFO_RECEIVED`;
export const TOURNAMENT_INFO_FAILURE = `${ROOT}TOURNAMENT_INFO_FAILURE`;

export const TEAMS_RECEIVED = `${ROOT}TEAMS_RECEIVED`;

export const POINT_SCHEME_REQUESTED = `${ROOT}POINT_SCHEME_REQUESTED`;
export const POINT_SCHEME_RECEIVED = `${ROOT}POINT_SCHEME_RECEIVED`;
export const POINT_SCHEME_ERROR = `${ROOT}POINT_SCHEME_ERROR`;

export const PHASES_REQUESTED = `${ROOT}PHASES_REQUESTED`;
export const PHASES_RECEIVED = `${ROOT}PHASES_RECEIVED`;
export const PHASES_ERROR = `${ROOT}PHASES_ERROR`;

export const PHASE_CHANGE = `${ROOT}PHASE_CHANGE`;
export const INITIAL_PHASE_ON_LOAD = `${ROOT}INITIAL_PHASE_ON_LOAD`;

export const getTournamentInformation = (tournamentId) => async (dispatch) => {
  dispatch({
    type: TOURNAMENT_INFO_REQUESTED,
  });
  try {
    const result = await tournamentClient.getTournamentInfo(tournamentId);
    const tournamentInfo = mapSingleTournament(result);
    const teamsAndPlayers = groupTeamsAndPlayers(
      await teamClient.getTeams(tournamentId)
    );
    const phases = mapPhases(result.phases);
    const tossupValues = mapTossupValues(result.tossupValues);
    const brackets = mapBrackets(result.divisions);
    dispatch({
      type: TOURNAMENT_INFO_RECEIVED,
      tournamentInfo,
    });
    dispatch({
      type: TEAMS_RECEIVED,
      teams: teamsAndPlayers.teams,
      players: teamsAndPlayers.players,
    });
    dispatch({
      type: PHASES_RECEIVED,
      phases,
    });
    dispatch({
      type: POINT_SCHEME_RECEIVED,
      tossupValues,
    });
    dispatch({
      type: BRACKETS_RECEIVED,
      brackets,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: TOURNAMENT_INFO_FAILURE,
      error,
    });
  }
};

export const newPhaseSelected =
  ({ tournamentId, phaseId, statType, callback }) =>
  async (dispatch) => {
    const { teamStandings, teamFull, individual, individualFull, roundReport } =
      reportTypes;
    let action;
    switch (statType) {
      case teamStandings:
        action = requestTeamStandings(tournamentId, phaseId);
        break;
      case teamFull:
        action = requestFullTeamStandings(tournamentId, phaseId);
        break;
      case individual:
        action = getIndividualStandings(tournamentId, phaseId);
        break;
      case individualFull:
        action = requestFullIndividualStandings(tournamentId, phaseId);
        break;
      case roundReport:
        action = getRoundReport(tournamentId, phaseId);
        break;
      default:
        break;
    }
    await action(dispatch);
    dispatch({
      type: PHASE_CHANGE,
      newSelectedPhaseId: phaseId,
    });
    if (callback) {
      callback();
    }
  };

export const setInitialPhaseOnLoad =
  ({ phaseId }) =>
  async (dispatch) => {
    dispatch({
      type: PHASE_CHANGE,
      newSelectedPhaseId: phaseId,
    });
  };

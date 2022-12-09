import { push } from 'react-router-redux';

import tournamentClient from './../../client/tournament-client';
import { mapTournaments } from './../../mappers/tournaments-mapper';

import { getTournamentUrlFromTournament } from './../../util/url-util';

const ROOT = 'landingPage/';

export const RECENT_TOURNAMENTS_REQUESTED = `${ROOT}RECENT_TOURNAMENTS_REQUESTED`;
export const RECENT_TOURNAMENTS_RECEIVED = `${ROOT}RECENT_TOURNAMENTS_RECEIVED`;
export const RECENT_TOURNAMENTS_ERROR = `${ROOT}RECENT_TOURNAMENTS_ERROR`;

export const CHANGED_FOCUSED_DATE = `${ROOT}CHANGED_FOCUSED_DATE`;
export const CHANGED_START_OR_END_DATES = `${ROOT}CHANGED_START_OR_END_DATES`;

export const TOURNAMENT_SEARCH_QUERY_CHANGE = `${ROOT}TOURNAMENT_SEARCH_QUERY_CHANGE`;
export const TOURNAMENT_SEARCH_QUERY_SUBMITTED = `${ROOT}TOURNAMENT_SEARCH_QUERY_SUBMITTED`;
export const TOURNAMENT_SEARCH_QUERY_SUCCESS = `${ROOT}TOURNAMENT_SEARCH_QUERY_SUCCESS`;
export const TOURNAMENT_SEARCH_QUERY_FAILURE = `${ROOT}TOURNAMENT_SEARCH_QUERY_FAILURE`;

export const changeFocusedDate = focusedInput =>
  dispatch =>
    dispatch({
      type: CHANGED_FOCUSED_DATE,
      focusedInput,
    });

export const changeDates = (startDate, endDate) =>
    dispatch =>
      dispatch({
        type: CHANGED_START_OR_END_DATES,
        startDate,
        endDate,
      });

export const getRecentTournaments = (daysSince = 30) =>
  async dispatch => {
    dispatch({
      type: RECENT_TOURNAMENTS_REQUESTED,
    });
    try {
      const tournaments = await tournamentClient.getRecentTournaments(daysSince);
      const mapped = mapTournaments(tournaments);
      dispatch({
        type: RECENT_TOURNAMENTS_RECEIVED,
        recentTournaments: mapped,
      });
    } catch (error) {
      dispatch({
        type: RECENT_TOURNAMENTS_ERROR,
      });
    }
  };

export const getTournamentsBetweenDates = (startDate = new Date(), endDate = new Date()) =>
  async dispatch => {
    dispatch({
      type: RECENT_TOURNAMENTS_REQUESTED,
    });
    try {
      const tournaments = await tournamentClient.getTournamentsInRange(startDate, endDate);
      const mapped = mapTournaments(tournaments);
      dispatch({
        type: RECENT_TOURNAMENTS_RECEIVED,
        recentTournaments: mapped,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: RECENT_TOURNAMENTS_ERROR,
      });
    }
  };

export const onTournamentSearchChange = query =>
  dispatch =>
    dispatch({
      type: TOURNAMENT_SEARCH_QUERY_CHANGE,
      query,
    });

export const onTournamentSearchQuerySubmitted = query =>
    async dispatch => {
      dispatch({
        type: TOURNAMENT_SEARCH_QUERY_SUBMITTED,
        query,
      });
      try {
        const mapped = mapTournaments( await tournamentClient.getTournamentsByName(query));
        dispatch({
          type: TOURNAMENT_SEARCH_QUERY_SUCCESS,
          tournaments: mapped,
        });
      } catch (err) {
        dispatch({
          type: TOURNAMENT_SEARCH_QUERY_FAILURE,
          error: err,
        })
      }
    }

export const tournamentSelectedFromChoices = tournament =>
    dispatch => {
      const tournamentUrl = getTournamentUrlFromTournament(tournament);
      dispatch(push(tournamentUrl));
    }
      
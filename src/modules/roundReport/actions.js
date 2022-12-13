import statsClient from "client/stats-client";
import { mapRoundReport } from "mappers/round-report-mapper";

const ROOT = "roundReport/";

export const ROUND_REPORT_REQUESTED = `${ROOT}ROUND_REPORT_REQUESTED`;
export const ROUND_REPORT_RECEIVED = `${ROOT}ROUND_REPORT_RECEIVED`;
export const ROUND_REPORT_ERROR = `${ROOT}ROUND_REPORT_ERROR`;

export const getRoundReport = (tournamentId, phaseId) => async (dispatch) => {
  try {
    dispatch({
      type: ROUND_REPORT_REQUESTED,
    });
    const roundReport = await statsClient.getRoundReport(tournamentId, phaseId);
    const mappedStandings = mapRoundReport(roundReport.rounds);
    dispatch({
      type: ROUND_REPORT_RECEIVED,
      roundReportStats: mappedStandings,
    });
  } catch (e) {
    dispatch({
      type: ROUND_REPORT_ERROR,
    });
  }
};

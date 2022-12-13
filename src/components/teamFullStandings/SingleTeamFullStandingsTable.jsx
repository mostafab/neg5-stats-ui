import React from "react";
import { Table } from "react-bootstrap";

import ObjectTableRow from "../util/ObjectTableRow";
import IndividualStatsTable from "./../individualStandings/IndividualStatsTable";

import { getNumberOfTossupsByValue } from "./../../util/stats-util";
import { removeHeadersRelatedToNegs } from "./../../util/headers-util";

const HEADERS = [
  { displayName: "Round", field: "round" },
  { displayName: "Opponent", field: "opponentName" },
  { displayName: "Result", field: "result" },
  { displayName: "PF", field: "totalPoints" },
  { displayName: "PA", field: "opponentScore" },
  { displayName: "TUH", field: "totalTUH" },
  { displayName: "PPTH", field: "pointsPerTossupHeard" },
  { displayName: "P / N", field: "powersToNegRatio", measuresNeg: true },
  { displayName: "G / N", field: "getsToNegRatio", measuresNeg: true },
  { displayName: "Bonuses Heard", field: "bonusesHeard" },
  { displayName: "Bonus Points", field: "bonusPoints" },
  { displayName: "Bounceback Points", field: "bouncebackPoints" },
  { displayName: "PPB", field: "ppb" },
];

const INDEX_TO_INSERT_POINT_SCHEME = 5;

const SingleTeamFullStandingsTable = ({
  fullTeamStats,
  tossupValues,
  players,
  tournamentId,
  phaseId,
  slug,
  bouncebacks,
  usesNegs,
}) => {
  const getTableHeaders = () => {
    let copy = Object.assign([], HEADERS);
    const values = tossupValues.map((tv) => ({
      displayName: tv.value,
      field: (team) => getNumberOfTossupsByValue(tv.value, team),
    }));
    copy.splice(INDEX_TO_INSERT_POINT_SCHEME, 0, ...values);
    if (!usesNegs) {
      copy = removeHeadersRelatedToNegs(copy);
    }
    if (!bouncebacks) {
      copy = copy.filter((header) => header.field !== "bouncebackPoints");
    }
    return copy;
  };
  const tableHeaders = getTableHeaders();
  const teamHeader = (
    <tr>
      <th colSpan={tableHeaders.length}> {fullTeamStats.teamName} </th>
    </tr>
  );
  return (
    <div className="SingleTeamFullStandingsTable">
      <Table responsive condensed hover id={`team_${fullTeamStats.teamId}`}>
        <thead>
          {teamHeader}
          <tr>
            {tableHeaders.map((header) => (
              <th key={header.displayName}> {header.displayName} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fullTeamStats.matches.map((match) => (
            <ObjectTableRow
              key={`${fullTeamStats.teamId}_${match.opponentId}_${match.round}`}
              dataObject={match}
              headers={tableHeaders}
            />
          ))}
        </tbody>
      </Table>
      <IndividualStatsTable
        slug={slug}
        tournamentId={tournamentId}
        phaseId={phaseId}
        tossupValues={tossupValues}
        individualStats={players}
      />
    </div>
  );
};

export default SingleTeamFullStandingsTable;

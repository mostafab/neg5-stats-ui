import React from "react";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";

import ObjectTableRow from "../util/ObjectTableRow";
import { getNumberOfTossupsByValue } from "./../../util/stats-util";
import { removeHeadersRelatedToNegs } from "./../../util/headers-util";

const PLAYER_URL =
  "/t/{tournamentId}/{slug}/player-full?phase={phaseId}#player_{playerId}";

const onClick = (e, router, url) => {
  e.preventDefault();
  router.push(url);
};

const HEADERS = (router) => [
  { displayName: "Rank", field: "rank" },
  {
    displayName: "Player Name",
    field: (player, tournamentId, slug, phaseId) => {
      let formattedUrl = PLAYER_URL.replace("{tournamentId}", tournamentId)
        .replace("{playerId}", player.playerId)
        .replace("{slug}", slug);
      if (phaseId) {
        formattedUrl = formattedUrl.replace("{phaseId}", phaseId);
      } else {
        formattedUrl = formattedUrl.replace("?phase={phaseId}", "");
      }
      return (
        <a
          onClick={(e) => onClick(e, router, formattedUrl)}
          href={formattedUrl}
        >
          {" "}
          {player.playerName}{" "}
        </a>
      );
    },
  },
  { displayName: "Team", field: "teamName" },
  { displayName: "GP", field: "gamesPlayed" },
  { displayName: "TUH", field: "totalTUH" },
  { displayName: "Points", field: "totalPoints" },
  { displayName: "P / TUH", field: "pointsPerTossup" },
  { displayName: "P / N", field: "powersToNegRatio", measuresNeg: true },
  { displayName: "G / N", field: "getsToNegRatio", measuresNeg: true },
  { displayName: "PPG", field: "ppg" },
];

const INDEX_TO_INSERT_POINT_SCHEME = 4;

const IndividualStatsTable = ({
  individualStats,
  phaseId,
  tournamentId,
  tossupValues,
  slug,
  usesNegs,
}) => {
  const router = useRouter();

  const getTableHeaders = () => {
    let copy = Object.assign([], HEADERS(router));
    copy.find((h) => h.displayName === "Player Name").args = [
      tournamentId,
      slug,
      phaseId,
    ];
    const values = tossupValues.map((tv) => ({
      displayName: tv.value,
      field: (team) => getNumberOfTossupsByValue(tv.value, team),
    }));
    copy.splice(INDEX_TO_INSERT_POINT_SCHEME, 0, ...values);
    if (!usesNegs) {
      copy = removeHeadersRelatedToNegs(copy);
    }
    return copy;
  };

  const tableHeaders = getTableHeaders();
  return (
    <Table responsive condensed hover className="IndividualStatsTable">
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header.displayName}> {header.displayName} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {individualStats.map((player) => (
          <ObjectTableRow
            key={player.playerId}
            dataObject={player}
            headers={tableHeaders}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default IndividualStatsTable;

import React from 'react';
import { Table } from 'react-bootstrap';
import { useRouter } from 'next/router';

import { getNumberOfTossupsByValue } from './../../util/stats-util';
import { removeHeadersRelatedToNegs } from './../../util/headers-util';
import ObjectTableRow from '../util/ObjectTableRow';

const TEAM_URL = '/t/{tournamentId}/{slug}/team-full?phase={phaseId}#team_{teamId}';

const onClick = (e, router, url) => {
  e.preventDefault();
  router.push(url);
}

const HEADERS = (router) => [
  { displayName: 'Rank', field: 'rank' },
  { displayName: 'Team', field: (team, tournamentId, slug, phaseId) => {
    let url = TEAM_URL.replace('{tournamentId}', tournamentId)
      .replace('{teamId}', team.teamId)
      .replace('{slug}', slug)
    if (phaseId) {
      url = url.replace('{phaseId}', phaseId);
    } else {
      url = url.replace('?phase={phaseId}', '');
    }
    return <a onClick={e => onClick(e, router, url)} href={url}> {team.teamName} </a>;
  }},
  { displayName: 'W', field: 'wins' },
  { displayName: 'L', field: 'losses' },
  { displayName: 'T', field: 'ties' },
  { displayName: 'Win %', field: 'winPercentage' },
  { displayName: 'PPG', field: 'ppg' },
  { displayName: 'PAPG', field: 'papg' },
  { displayName: 'Margin', field: 'margin' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'PPTH', field: 'pointsPerTossupHeard' },
  { displayName: 'P / N', field: 'powersToNegRatio', measuresNeg: true },
  { displayName: 'G / N', field: 'getsToNegRatio', measuresNeg: true },
  { displayName: 'PPB', field: 'ppb' },
];

const INDEX_TO_INSERT_POINT_SCHEME = 8;

const TeamsAggregateStatsTable = ({
  allTeamStats,
  tossupValues,
  bracket,
  phaseId,
  tournamentId,
  slug,
  usesNegs,
}) => {
  const router = useRouter();
  const getTableHeaders = () => {
    let copy = Object.assign([], HEADERS(router));
    const values = tossupValues.map(tv => ({
      displayName: tv.value,
      field: team => getNumberOfTossupsByValue(tv.value, team),
    }));
    copy.splice(INDEX_TO_INSERT_POINT_SCHEME, 0, ...values);
    copy.find(h => h.displayName === 'Team').args = [tournamentId, slug, phaseId];
    if (!usesNegs) {
      copy = removeHeadersRelatedToNegs(copy);
    }
    return copy;
  }
  const tableHeaders = getTableHeaders();
  const bracketHeader = bracket ? <tr><th colSpan={tableHeaders.length}> { bracket.name } </th></tr> : null;
  return (
    <Table responsive condensed hover className='TeamsAggregateStatsTable'>
        <thead>
          { bracketHeader }
          <tr>
            {
              tableHeaders.map(header => <th key={header.displayName}> {header.displayName} </th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            allTeamStats.map(team => <ObjectTableRow key={team.teamId} dataObject={team} headers={tableHeaders}/>)
          }
        </tbody>
    </Table>
  );
}

export default TeamsAggregateStatsTable;


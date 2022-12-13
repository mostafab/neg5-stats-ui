import React from 'react';
import { Table } from 'react-bootstrap';

import ObjectTableRow from '../util/ObjectTableRow';

const HEADERS = [
  { displayName: 'Round', field: 'round' },
  { displayName: 'Average PPG', field: 'averagePPG' },
  { displayName: 'TU Pts', field: 'totalTossupPoints' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'TU Pts / TUH', field: 'tossupPointsPerTossupHeard' },
  { displayName: 'Average PPB', field: 'ppb' },
];

const RoundReportTable = ({
  roundReportStats,
}) => (
  <Table responsive condensed hover className='RoundReportTable'>
    <thead>
      <tr>
        {
          HEADERS.map(header => <th key={header.displayName}> {header.displayName} </th>)
        }
      </tr>
    </thead>
    <tbody>
      { roundReportStats.map(round => <ObjectTableRow key={round.round} dataObject={round} headers={HEADERS} />) }
    </tbody>
  </Table>
)

export default RoundReportTable;

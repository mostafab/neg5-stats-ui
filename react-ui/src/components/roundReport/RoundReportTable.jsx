import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import ObjectTableRow from '../util/ObjectTableRow';
import { getTossupPointsPerTossupsHeard } from './../../util/stats-util';

const HEADERS = [
  { displayName: 'Round', field: 'round' },
  { displayName: 'Average PPG', field: 'averagePPG' },
  { displayName: 'TU Pts', field: 'totalTossupPoints' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'TU Pts / TUH', field: round => getTossupPointsPerTossupsHeard(round) },
  { displayName: 'Average PPB', field: 'ppb' },
];

export default class RoundReportTable extends React.Component {

  static propTypes = {
    roundReportStats: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  getTableHeaders() {
    const copy = Object.assign([], HEADERS);
    return copy;
  }

  render() {
    const tableHeaders = this.getTableHeaders();
    return (
      <Table responsive condensed hover className='RoundReportTable'>
          <thead>
            <tr>
              {
                tableHeaders.map(header => <th key={header.displayName}> {header.displayName} </th>)
              }
            </tr>
          </thead>
          <tbody>
              { this.props.roundReportStats.map(round => <ObjectTableRow key={round.round} dataObject={round} headers={tableHeaders} />) }
          </tbody>
      </Table>
    );
  }

}
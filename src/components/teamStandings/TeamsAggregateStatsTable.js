import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import ObjectTableRow from '../util/ObjectTableRow';

const HEADERS = [
  { displayName: 'Rank', field: 'rank' },
  { displayName: 'Team', field: 'teamName' },
  { displayName: 'W', field: 'wins' },
  { displayName: 'L', field: 'losses' },
  { displayName: 'T', field: 'ties' },
  { displayName: 'Win Pct', field: 'winPct' },
  { displayName: 'PPG', field: 'ppg' },
  { displayName: 'PAPG', field: 'papg' },
  { displayName: 'Margin', field: 'margin' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'PPTH', field: team => team.totalPoints / team.totalTUH },
  { displayName: 'P / N', field: team => team.totalPowers / team.totalNegs },
  { displayName: 'G / N', field: team => team.rawTotalGets / team.totalNegs },
  { displayName: 'PPB', field: 'ppb' },
];

const INDEX_TO_INSERT_POINT_SCHEME = 8;

export default class TeamsAggregateStatsTable extends React.Component {

  constructor(props) {
    super(props);
  }

  static getTableHeaders(pointScheme) {
    const copy = Object.assign([], HEADERS);
    const values = pointScheme.map(tv => ({
      displayName: tv.value,
      field: team => team.tossupTotals.find(totals => totals.value === tv.value),
    }));
    copy.splice(INDEX_TO_INSERT_POINT_SCHEME, 0, ...values);
    return copy;
  }

  render() {
    const { pointScheme, teamStats } = this.props;
    const TABLE_HEADERS = TeamsAggregateStatsTable.getTableHeaders(pointScheme);
    return (
      <Table responsive condensed hover>
          <thead>
            <tr>
              {
                TABLE_HEADERS.map(header => <th key={header.displayName}> {header.displayName} </th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              teamStats.map(team => <ObjectTableRow dataObject={team} headers={TABLE_HEADERS}/>)
            }
          </tbody>
      </Table>
    );
  }
};

TeamsAggregateStatsTable.propTypes = {
  teamStats: PropTypes.arrayOf(PropTypes.object),
  pointScheme: PropTypes.arrayOf(PropTypes.object),
};

TeamsAggregateStatsTable.defaultProps = {
  teamStats: [],
  pointScheme: [],
};



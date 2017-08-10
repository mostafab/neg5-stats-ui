import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { getGetsToNegRatio, getPointsPerTossupHeard, getPowersToNegRatio } from './../../util/team-util';

import ObjectTableRow from '../util/ObjectTableRow';

const HEADERS = [
  { displayName: 'Rank', field: 'rank' },
  { displayName: 'Team', field: 'teamName' },
  { displayName: 'W', field: 'wins' },
  { displayName: 'L', field: 'losses' },
  { displayName: 'T', field: 'ties' },
  { displayName: 'Win Pct', field: 'winPercentage' },
  { displayName: 'PPG', field: 'ppg' },
  { displayName: 'PAPG', field: 'papg' },
  { displayName: 'Margin', field: 'margin' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'PPTH', field: team => getPointsPerTossupHeard(team) },
  { displayName: 'P / N', field: team => getPowersToNegRatio(team) },
  { displayName: 'G / N', field: team => getGetsToNegRatio(team) },
  { displayName: 'PPB', field: 'ppb' },
];

const INDEX_TO_INSERT_POINT_SCHEME = 8;

export default class TeamsAggregateStatsTable extends React.Component {

  static getTableHeaders(pointScheme) {
    const copy = Object.assign([], HEADERS);
    const values = pointScheme.map(tv => ({
      displayName: tv.value,
      field: team => team.tossupTotals.find(totals => totals.value === tv.value).value,
    }));
    copy.splice(INDEX_TO_INSERT_POINT_SCHEME, 0, ...values);
    return copy;
  }

  render() {
    const { pointScheme, allTeamStats, bracket } = this.props;
    const TABLE_HEADERS = TeamsAggregateStatsTable.getTableHeaders(pointScheme);
    const bracketHeader = bracket ? <tr><th colSpan={TABLE_HEADERS.length}> { bracket.name } </th></tr> : null;
    return (
      <Table responsive condensed hover>
          <thead>
            { bracketHeader }
            <tr>
              {
                TABLE_HEADERS.map(header => <th key={header.displayName}> {header.displayName} </th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              allTeamStats.map(team => <ObjectTableRow key={team.teamId} dataObject={team} headers={TABLE_HEADERS}/>)
            }
          </tbody>
      </Table>
    );
  }
};

TeamsAggregateStatsTable.propTypes = {
  allTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
  pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
  bracket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

TeamsAggregateStatsTable.defaultProps = {
  allTeamStats: [],
  pointScheme: [],
};



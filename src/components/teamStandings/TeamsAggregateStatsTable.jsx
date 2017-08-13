import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { getGetsToNegRatio, getPointsPerTossupHeard, getPowersToNegRatio, getNumberOfTossupsByValue } from './../../util/stats-util';

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

  static propTypes = {
    allTeamStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
    bracket: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };

  getTableHeaders() {
    const copy = Object.assign([], HEADERS);
    const values = this.props.pointScheme.map(tv => ({
      displayName: tv.value,
      field: team => getNumberOfTossupsByValue(tv.value, team),
    }));
    copy.splice(INDEX_TO_INSERT_POINT_SCHEME, 0, ...values);
    return copy;
  }

  render() {
    const { allTeamStats, bracket } = this.props;
    const tableHeaders = this.getTableHeaders();
    const bracketHeader = bracket ? <tr><th colSpan={tableHeaders.length}> { bracket.name } </th></tr> : null;
    return (
      <Table responsive condensed hover>
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
};


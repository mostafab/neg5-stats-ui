import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import { getGetsToNegRatio, getPointsPerTossupHeard, getPowersToNegRatio,
  getNumberOfTossupsByValue, getTeamBonusesHeardInMatch,
  getTeamBonusPointsInMatch } from './../../util/stats-util';
import ObjectTableRow from '../util/ObjectTableRow';

const HEADERS = [
  { displayName: 'Round', field: 'round' },
  { displayName: 'Opponent', field: 'opponentName' },
  { displayName: 'Result', field: 'result' },
  { displayName: 'PF', field: 'totalPoints' },
  { displayName: 'PA', field: 'opponentScore' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'PPTH', field: match => getPointsPerTossupHeard(match) },
  { displayName: 'P / N', field: match => getPowersToNegRatio(match) },
  { displayName: 'G / N', field: match => getGetsToNegRatio(match) },
  { displayName: 'Bonuses Heard', field: match => getTeamBonusesHeardInMatch(match) },
  { displayName: 'Bonus Points', field: match => getTeamBonusPointsInMatch(match) },
  { displayName: 'Bounceback Points', field: 'bouncebackPoints' },
  { displayName: 'PPB', field: 'ppb' },
];

const INDEX_TO_INSERT_POINT_SCHEME = 5;

export default class SingleTeamFullStandingsTable extends React.Component {
  
  static propTypes = {
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
    fullTeamStats: PropTypes.object.isRequired,
  }

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
    const { fullTeamStats } = this.props;
    const tableHeaders = this.getTableHeaders();
    const teamHeader = <tr><th colSpan={tableHeaders.length}> { fullTeamStats.teamName } </th></tr>;
    return (
      <Table responsive condensed hover>
          <thead>
            { teamHeader }
            <tr>
              {
                tableHeaders.map(header => <th key={header.displayName}> {header.displayName} </th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              fullTeamStats.matches.map(match => <ObjectTableRow key={match.matchId} dataObject={match} headers={tableHeaders}/>)
            }
          </tbody>
      </Table>
    )
  }
};

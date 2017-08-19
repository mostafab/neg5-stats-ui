import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import ObjectTableRow from '../util/ObjectTableRow';

import { getGetsToNegRatio, getPointsPerTossupHeard, getPowersToNegRatio,
  getNumberOfTossupsByValue, getTeamBonusesHeardInMatch,
  getTeamBonusPointsInMatch } from './../../util/stats-util';

const HEADERS = [
  { displayName: 'Round', field: 'round' },
  { displayName: 'Opponent', field: 'opponentTeamName' },
  { displayName: 'GP', field: 'gamePlayed' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'P / TU', field: match => getPointsPerTossupHeard(match) },
  { displayName: 'P / N', field: match => getPowersToNegRatio(match) },
  { displayName: 'G / N', field: match => getGetsToNegRatio(match) },
  { displayName: 'Points', field: 'totalPoints' },
];

const INDEX_TO_INSERT_POINT_SCHEME = 3;

export default class SingleIndividualFullStandingsTable extends React.Component {

  static propTypes = {
    playerStats: PropTypes.object.isRequired,
    pointScheme: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    const { playerStats } = this.props;
    const tableHeaders = this.getTableHeaders();
    const playerHeader = <tr><th colSpan={tableHeaders.length}> { playerStats.playerName } </th></tr>;
    return (
      <Table responsive condensed hover id={`player_${playerStats.playerId}`}>
          <thead>
            { playerHeader }
            <tr>
              {
                tableHeaders.map(header => <th key={header.displayName}> {header.displayName} </th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              playerStats.matches.map(match => <ObjectTableRow key={match.matchId} dataObject={match} headers={tableHeaders}/>)
            }
          </tbody>
      </Table>
    )
  }
};

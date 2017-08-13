import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import ObjectTableRow from '../util/ObjectTableRow';
import { getPointsPerTossupHeard, getPlayerGetsToNegRatio, getPlayerPowerToNegRatio } from './../../util/stats-util';

const HEADERS = [
    { displayName: 'Rank', field: 'rank' },
    { displayName: 'Player Name', field: 'playerName' },
    { displayName: 'Team', field: 'teamName' },
    { displayName: 'GP', field: 'gamesPlayed' },
    { displayName: 'TUH', field: 'totalTUH' },
    { displayName: 'Points', field: 'totalPoints' },
    { displayName: 'P / TUH', field: player => getPointsPerTossupHeard(player) },
    { displayName: 'P / N', field: player => getPlayerPowerToNegRatio(player) },
    { displayName: 'G / N', field: player => getPlayerGetsToNegRatio(player) },
    { displayName: 'PPG', field: 'ppg' },
];

export default class IndividualStatsTable extends React.Component {

  static propTypes = {
    individualStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    phaseId: PropTypes.string.isRequired,
    tournamentId: PropTypes.string.isRequired,
  }

  getTableHeaders() {
    const copy = Object.assign([], HEADERS);
    return copy;
  }

  render() {
    const tableHeaders = this.getTableHeaders();
    return (
      <Table responsive condensed hover>
          <thead>
            <tr>
              {
                tableHeaders.map(header => <th key={header.displayName}> {header.displayName} </th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.individualStats.map(player => <ObjectTableRow key={player.playerId} dataObject={player} headers={tableHeaders}/>)
            }
          </tbody>
      </Table>
    );
  }
};

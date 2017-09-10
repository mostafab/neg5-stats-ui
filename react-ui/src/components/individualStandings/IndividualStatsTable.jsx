import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

import ObjectTableRow from '../util/ObjectTableRow';
import { tournamentUsesNegs, getPointsPerTossupHeard, getPlayerGetsToNegRatio, getPlayerPowerToNegRatio, getNumberOfTossupsByValue } from './../../util/stats-util';
import { removeHeadersRelatedToNegs } from './../../util/headers-util';

const PLAYER_URL = '/t/{tournamentId}/player-full?phase={phaseId}#player_{playerId}';

const HEADERS = [
    { displayName: 'Rank', field: 'rank' },
    { displayName: 'Player Name', field: (player, tournamentId, phaseId) => {
      let formattedUrl = PLAYER_URL.replace('{tournamentId}', tournamentId)
        .replace('{playerId}', player.playerId);
      if (phaseId) {
        formattedUrl = formattedUrl.replace('{phaseId}', phaseId); 
      } else {
        formattedUrl = formattedUrl.replace('?phase={phaseId}', '');
      }
      return <Link to={ formattedUrl }> { player.playerName } </Link>
    }},
    { displayName: 'Team', field: 'teamName' },
    { displayName: 'GP', field: 'gamesPlayed' },
    { displayName: 'TUH', field: 'totalTUH' },
    { displayName: 'Points', field: 'totalPoints' },
    { displayName: 'P / TUH', field: player => getPointsPerTossupHeard(player) },
    { displayName: 'P / N', field: player => getPlayerPowerToNegRatio(player), measuresNeg: true },
    { displayName: 'G / N', field: player => getPlayerGetsToNegRatio(player), measuresNeg: true },
    { displayName: 'PPG', field: 'ppg' },
];

const INDEX_TO_INSERT_POINT_SCHEME = 4;

export default class IndividualStatsTable extends React.Component {

  static propTypes = {
    individualStats: PropTypes.arrayOf(PropTypes.object).isRequired,
    phaseId: PropTypes.string.isRequired,
    tournamentId: PropTypes.string.isRequired,
    tossupValues: PropTypes.array.isRequired,
  }

  getTableHeaders() {
    let copy = Object.assign([], HEADERS);
    copy.find(h => h.displayName === 'Player Name').args = [this.props.tournamentId, this.props.phaseId];
    const values = this.props.tossupValues.map(tv => ({
      displayName: tv.value,
      field: team => getNumberOfTossupsByValue(tv.value, team),
    }));
    copy.splice(INDEX_TO_INSERT_POINT_SCHEME, 0, ...values);
    if (!tournamentUsesNegs(this.props.tossupValues)) {
      copy = removeHeadersRelatedToNegs(copy);
    }
    return copy;
  }

  render() {
    const tableHeaders = this.getTableHeaders();
    return (
      <Table responsive condensed hover className='IndividualStatsTable'>
          <thead>
            <tr>
              {
                tableHeaders.map(header => <th key={header.displayName}> {header.displayName} </th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.individualStats.map(player => <ObjectTableRow key={player.playerId} dataObject={player} headers={tableHeaders} />)
            }
          </tbody>
      </Table>
    );
  }
};

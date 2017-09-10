import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import ObjectTableRow from '../util/ObjectTableRow';
import IndividualStatsTable from './../individualStandings/IndividualStatsTable';

import { tournamentUsesNegs, getGetsToNegRatio, getPointsPerTossupHeard, getPowersToNegRatio,
  getNumberOfTossupsByValue, getTeamBonusesHeardInMatch,
  getTeamBonusPointsInMatch } from './../../util/stats-util';
import { removeHeadersRelatedToNegs } from './../../util/headers-util';

const HEADERS = [
  { displayName: 'Round', field: 'round' },
  { displayName: 'Opponent', field: 'opponentName' },
  { displayName: 'Result', field: 'result' },
  { displayName: 'PF', field: 'totalPoints' },
  { displayName: 'PA', field: 'opponentScore' },
  { displayName: 'TUH', field: 'totalTUH' },
  { displayName: 'PPTH', field: match => getPointsPerTossupHeard(match) },
  { displayName: 'P / N', field: match => getPowersToNegRatio(match), measuresNeg: true },
  { displayName: 'G / N', field: match => getGetsToNegRatio(match), measuresNeg: true },
  { displayName: 'Bonuses Heard', field: match => getTeamBonusesHeardInMatch(match) },
  { displayName: 'Bonus Points', field: match => getTeamBonusPointsInMatch(match) },
  { displayName: 'Bounceback Points', field: 'bouncebackPoints' },
  { displayName: 'PPB', field: 'ppb' },
];

const INDEX_TO_INSERT_POINT_SCHEME = 5;

export default class SingleTeamFullStandingsTable extends React.Component {
  
  static propTypes = {
    tossupValues: PropTypes.arrayOf(PropTypes.object).isRequired,
    fullTeamStats: PropTypes.object.isRequired,
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    tournamentId: PropTypes.string.isRequired,
    phaseId: PropTypes.string.isRequired,
  }

  getTableHeaders() {
    let copy = Object.assign([], HEADERS);
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
    const { fullTeamStats, tossupValues, players, tournamentId, phaseId } = this.props;
    const tableHeaders = this.getTableHeaders();
    const teamHeader = <tr><th colSpan={tableHeaders.length}> { fullTeamStats.teamName } </th></tr>;
    return (
      <div className='SingleTeamFullStandingsTable'>
        <Table responsive condensed hover id={`team_${fullTeamStats.teamId}`}>
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
        <IndividualStatsTable tournamentId={tournamentId} phaseId={phaseId} tossupValues={ tossupValues } individualStats={ players }/>
      </div>
    )
  }
};

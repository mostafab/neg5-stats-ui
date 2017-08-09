import React from 'react';
import TeamStandingsContent from './TeamStandingsContent';

export default class TeamStandingsRoot extends React.Component {

  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    this.props.requestTeamStandings(tournamentId);
    this.props.getTournamentBrackets(tournamentId);
  }

  render() {
    return (
      <div>
        <TeamStandingsContent allTeamStats={ this.props.allTeamStats } brackets={ this.props.brackets } />
      </div>
    )
  }
}

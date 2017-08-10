import React from 'react';
import TeamStandingsContent from './TeamStandingsContent';

export default class TeamStandingsRoot extends React.Component {

  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    console.log(this.props);
    this.props.requestTeamStandings(tournamentId, this.props.selectedPhaseId);
    this.props.getTournamentBrackets(tournamentId);
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      this.props.requestTeamStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
  }

  render() {
    return (
      <div>
        <TeamStandingsContent allTeamStats={ this.props.allTeamStats } brackets={ this.props.brackets } />
      </div>
    )
  }
}

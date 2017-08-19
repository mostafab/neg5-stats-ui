import React from 'react';
import TeamStandingsContent from './TeamStandingsContent';

const POINT_SCHEME = [ { value: 10 }, { value: 15 }, { value: -5 } ];

export default class TeamStandingsRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    this.props.getTournamentBrackets(tournamentId);
    if (typeof this.props.selectedPhaseId !== 'undefined') {
      this.props.requestTeamStandings(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      this.props.requestTeamStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
  }

  render() {
    const { allTeamStats, brackets, match, selectedPhaseId, tossupValues } = this.props;
    return (
      <div>
        <h3> Team Standings </h3>
        <TeamStandingsContent allTeamStats={ allTeamStats } brackets={ brackets } tournamentId={ match.params.tournamentId } phaseId={ selectedPhaseId } tossupValues={tossupValues}/>
      </div>
    )
  }
};

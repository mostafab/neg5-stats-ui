import React from 'react';
import TeamStandingsContent from './TeamStandingsContent';

export default class TeamStandingsRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    if (typeof this.props.selectedPhaseId !== 'undefined' && this.props.numTimesStatsReceived < 1) {
      this.props.requestTeamStandings(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldTournamentId = prevProps.tournamentInfo.id;
    const newTournamentId = this.props.tournamentInfo.id;
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldTournamentId && oldTournamentId !== newTournamentId) { // We've switched tournaments
      this.props.requestTeamStandings(this.props.tournamentInfo.id, '');
    } else if (oldPhaseId !== currentPhaseId) { // We've switched phases
      this.props.requestTeamStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
    if (this.props.tournamentInfo.name) {
      document.title = `${this.props.tournamentInfo.name} Team Standings | Neg 5 Stats`;
    }
  }

  render() {
    const { allTeamStats, brackets, match, selectedPhaseId, tossupValues, tournamentInfo } = this.props;
    let title = `Team Standings`;
    if (tournamentInfo) {
      title = `${tournamentInfo.name || ''} Team Standings`;
    }
    return (
      <div className='TeamStandingsRoot'>
        <h3> { title } </h3>
        <TeamStandingsContent allTeamStats={ allTeamStats } brackets={ brackets }
          tournamentId={ match.params.tournamentId } phaseId={ selectedPhaseId }
          tossupValues={tossupValues} slug={match.params.slug}/>
      </div>
    )
  }
};

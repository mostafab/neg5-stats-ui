import React from 'react';

import TeamFullStandingsContent from './TeamFullStandingsContent';

export default class TeamFullStandingsRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    if (typeof this.props.selectedPhaseId !== 'undefined') {
      this.props.requestFullTeamStandings(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      this.props.requestFullTeamStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
  }

  render() {
    const { fullTeamStats, tossupValues } = this.props;
    return (
      <div>
        <h3> Full Team Standings </h3>
        <TeamFullStandingsContent fullTeamStats={fullTeamStats} tossupValues={tossupValues}/>
      </div>
    )
  }
};

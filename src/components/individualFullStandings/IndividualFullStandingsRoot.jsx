import React from 'react';

import IndividualFullStandingsContent from './IndividualFullStandingsContent';

const POINT_SCHEME = [ { value: 10 }, { value: 15 }, { value: -5 } ];

export default class IndividualFullStandingsRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    if (typeof this.props.selectedPhaseId !== 'undefined') {
      this.props.requestFullIndividualStandings(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      this.props.requestFullIndividualStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
  }

  render() {
    const { fullIndividualStats, tossupValues } = this.props;
    return (
      <div>
        <h3> Full Player Standings </h3>
        <IndividualFullStandingsContent fullIndividualStats={fullIndividualStats} tossupValues={tossupValues}/>
      </div>
    )
  }
};

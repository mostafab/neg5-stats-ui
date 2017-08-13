import React from 'react';

import IndividualStandingsContent from './IndividualStandingsContent';

const POINT_SCHEME = [ { value: 10 }, { value: 15 }, { value: -5 } ];

export default class IndividualStandingsRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    if (typeof this.props.selectedPhaseId !== 'undefined') {
      this.props.getIndividualStandings(tournamentId, this.props.selectedPhaseId);
    }
  }  

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      this.props.getIndividualStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
  }

  render() {
    const { individualStats, selectedPhaseId, match } = this.props;
    return (
      <div>
        <h3> Individual Standings </h3>
        <IndividualStandingsContent individualStats={ individualStats } phaseId={ selectedPhaseId } tournamentId={ match.params.tournamentId } pointScheme={POINT_SCHEME}/>
      </div>
    )
  }
};

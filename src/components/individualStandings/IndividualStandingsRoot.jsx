import React from 'react';

export default class IndividualStandingsRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    console.log(this.props);
    if (typeof this.props.selectedPhaseId !== 'undefined') {
      this.props.getIndividualStandings(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    console.log(this.props.individualStats);
    if (oldPhaseId !== currentPhaseId) {
      this.props.getIndividualStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
  }

  render() {
    return (
      <div>
        <h3> Individual Standings </h3>
      </div>
    )
  }
};

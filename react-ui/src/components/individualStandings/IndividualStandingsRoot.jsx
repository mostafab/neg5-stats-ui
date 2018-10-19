import React from 'react';
import propTypes from 'prop-types';

import IndividualStandingsContent from './IndividualStandingsContent';

export default class IndividualStandingsRoot extends React.Component {

  static getPropTypes() {
    return {
      selectedPhaseId: propTypes.string,
    }
  }
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    if (typeof this.props.selectedPhaseId !== 'undefined' && this.props.numTimesStatsReceived < 1) {
      this.props.getIndividualStandings(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      this.props.getIndividualStandings(this.props.match.params.tournamentId, currentPhaseId);
    }
    if (this.props.tournamentInfo.name) {
      document.title = `${this.props.tournamentInfo.name} Individual Standings | Neg 5 Stats`;
    }
  }

  render() {
    const { individualStats, selectedPhaseId, match, tossupValues, tournamentInfo, usesNegs } = this.props;
    return (
      <div className='IndividualStandingsRoot'>
        <h3> {tournamentInfo.name || ''} Individual Standings </h3>
        <IndividualStandingsContent
          slug={match.params.slug}
          individualStats={ individualStats }
          phaseId={ selectedPhaseId }
          tournamentId={ match.params.tournamentId }
          usesNegs={usesNegs}
          tossupValues={tossupValues}/>
      </div>
    )
  }
};

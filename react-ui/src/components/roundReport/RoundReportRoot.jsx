import React from 'react';

import RoundReportContent from './RoundReportContent';

export default class RoundReportRoot extends React.Component {
  
  componentDidMount() {
    const tournamentId = this.props.match.params.tournamentId;
    if (typeof this.props.selectedPhaseId !== 'undefined' && this.props.numTimesStatsReceived < 1) {
      this.props.getRoundReport(tournamentId, this.props.selectedPhaseId);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldPhaseId = prevProps.selectedPhaseId;
    const currentPhaseId = this.props.selectedPhaseId;
    if (oldPhaseId !== currentPhaseId) {
      const tournamentId = this.props.match.params.tournamentId;
      this.props.getRoundReport(tournamentId, this.props.selectedPhaseId);
    }
    if (this.props.tournamentInfo.name) {
      document.title = `${this.props.tournamentInfo.name} Round Report | Neg 5 Stats`;
    }
  }

  render() {
    const { roundReportStats, tournamentInfo } = this.props;
    return (
      <div className='RoundReportRoot'>
        <h3> {tournamentInfo.name || ''} Round Report </h3>
        <RoundReportContent roundReportStats={ roundReportStats } />
      </div>
    )
  }

};

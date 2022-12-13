import { connect } from 'react-redux';

import RoundReportRoot from '../../components/roundReport/RoundReportRoot';

const mapStateToProps = state => ({
  roundReportStats: state.roundReport.roundReportStats,
  numTimesStatsReceived: state.roundReport.numTimesStatsReceived,
  requestingRoundReport: state.roundReport.requestingRoundReport,
  selectedPhaseId: state.globalState.selectedPhaseId,
  tournamentInfo: state.globalState.loadedTournament,
});

export default connect(
  mapStateToProps,
)(RoundReportRoot);


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  getRoundReport
} from '../../modules/roundReport/actions';

import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';

import RoundReportRoot from '../../components/roundReport/RoundReportRoot';

const mapStateToProps = state => ({
  roundReportStats: state.roundReport.roundReportStats,
  numTimesStatsReceived: state.roundReport.numTimesStatsReceived,
  requestingRoundReport: state.roundReport.requestingRoundReport,
  selectedPhaseId: state.globalState.selectedPhaseId,
  tournamentInfo: state.globalState.loadedTournament,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRoundReport,
  setInitialPhaseOnLoad,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundReportRoot);


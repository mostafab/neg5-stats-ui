import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getIndividualStandings } from '../../modules/individualStandings/actions';

import { setInitialPhaseOnLoad } from '../../modules/tournamentStatsWrapper/actions';

import IndividualStandingsRoot from '../../components/individualStandings/IndividualStandingsRoot';

const mapStateToProps = state => ({
  selectedPhaseId: state.globalState.selectedPhaseId,
  individualStats: state.individualStandings.individualStats,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setInitialPhaseOnLoad,
  getIndividualStandings,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualStandingsRoot);


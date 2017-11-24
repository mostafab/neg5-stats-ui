import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LandingPageRoot from '../../components/landingPage/LandingPageRoot';

import { getRecentTournaments, changeFocusedDate, changeDates, getTournamentsBetweenDates } from '../../modules/landingPage/actions';

const mapStateToProps = state => ({
  recentTournaments: state.landingPage.recentTournaments,
  searchForm: state.landingPage.searchForm,
  numTimesTournamentsRequested: state.landingPage.numTimesTournamentsRequested,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRecentTournaments,
  changeFocusedDate,
  changeDates,
  getTournamentsBetweenDates,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageRoot);
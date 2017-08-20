import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LandingPageWrapper from '../../components/landingPage/LandingPageWrapper';

import { getRecentTournaments, changeFocusedDate, changeDates } from '../../modules/landingPage/actions';

const mapStateToProps = state => ({
  recentTournaments: state.landingPage.recentTournaments,
  searchForm: state.landingPage.searchForm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRecentTournaments,
  changeFocusedDate,
  changeDates,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageWrapper);
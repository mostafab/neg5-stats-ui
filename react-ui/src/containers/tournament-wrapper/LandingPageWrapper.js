import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LandingPageWrapper from '../../components/landingPage/LandingPageWrapper';

import { getRecentTournaments } from '../../modules/landingPage/actions';

const mapStateToProps = state => ({
  recentTournaments: state.landingPage.recentTournaments,
  searchForm: state.landingPage.searchForm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRecentTournaments,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageWrapper);
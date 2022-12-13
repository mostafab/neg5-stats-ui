import { connect } from 'react-redux';

import TopNavbar from '../../components/TopNavbar';

const mapStateToProps = state => ({
  tournamentSearchForm: state.landingPage.tournamentSearchForm,
  searchingForTournaments: state.landingPage.searchingForTournaments,
});

export default connect(
  mapStateToProps,
  null,
)(TopNavbar);

import { connect } from "react-redux";

import LandingPageRoot from "components/landingPage/LandingPageRoot";

const mapStateToProps = (state) => ({
  recentTournaments: state.landingPage.recentTournaments,
  searchForm: state.landingPage.searchForm,
  numTimesTournamentsRequested: state.landingPage.numTimesTournamentsRequested,
});

export default connect(mapStateToProps, null)(LandingPageRoot);

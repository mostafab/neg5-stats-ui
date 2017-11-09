import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TopNavbar from './../../components/TopNavbar';

import { onTournamentSearchChange, onTournamentSearchQuerySubmitted, tournamentSelectedFromChoices } from './../../modules/landingPage/actions';

const mapStateToProps = state => ({
  tournamentSearchForm: state.landingPage.tournamentSearchForm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onTournamentSearchChange,
  onTournamentSearchQuerySubmitted,
  tournamentSelectedFromChoices,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNavbar);

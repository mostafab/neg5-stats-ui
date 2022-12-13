import { connect } from 'react-redux';

import PhaseSelector from '../../components/PhaseSelector';

const mapStateToProps = state => ({
  tournamentId: state.globalState.loadedTournament.id,
  slug: state.globalState.loadedTournament.slug,
  phases: state.globalState.phases,
  selectedPhaseId: state.globalState.selectedPhaseId,
  loadingStatuses: [
    state.teamStandings.requestingTeamStandings,
    state.individualStandings.requestingIndividualStandings,
    state.teamFullStandings.requestingFullTeamStandings,
    state.individualFullStandings.requestingFullIndividualStandings,
    state.roundReport.requestingRoundReport,
  ],
});

export default connect(
  mapStateToProps,
  null,
)(PhaseSelector);
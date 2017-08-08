import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  requestTeamStandings
} from '../../modules/teamStandings/actions';

import TeamStandingsRoot from '../../components/teamStandings/TeamStandingsRoot';

const mapStateToProps = state => ({
  allTeamStats: state.teamStandings.allTeamStats,
  pointScheme: state.globalState.pointScheme,
  brackets: state.teamStandings.brackets,
  requestingTeamStandings: state.teamStandings.requestingTeamStandings,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestTeamStandings,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamStandingsRoot);


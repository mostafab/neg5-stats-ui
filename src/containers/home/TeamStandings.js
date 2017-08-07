import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  requestTeamStandings
} from '../../modules/teamStandings/actions';

import TeamStandingsRoot from '../../components/teamStandings/TeamStandingsRoot';

const mapStateToProps = state => ({
  teamStats: state.teamStandings.teamStats,
  pointScheme: state.teamStandings.pointScheme,
  brackets: state.teamStandings.brackets,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  requestTeamStandings,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamStandingsRoot);


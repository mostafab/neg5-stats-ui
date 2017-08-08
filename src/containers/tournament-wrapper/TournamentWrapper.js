import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {} from '../../modules/tournamentStatsWrapper/actions';

import TournamentStatsWrapper from '../../components/TournamentStatsWrapper';

const mapStateToProps = state => ({
  pointScheme: state.globalState.pointScheme,
  requestingPointScheme: state.globalState.requestingPointScheme,
  phases: state.globalState.phases,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentStatsWrapper);
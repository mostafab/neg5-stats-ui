import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Row, Col, InputGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import LoadingStatsIndicator from './LoadingStatsIndicator';

export default class PhaseSelector extends React.Component {

  render() {
    const selectedPhaseId = this.props.selectedPhaseId;
    const loading = this.props.loadingStatuses.some(status => status === true);
    return (
      <Row className='PhaseSelector'>
        <Col lg={4} md={6} sm={6}>
          <div>
            <FormGroup>
              <ControlLabel>Select a Phase</ControlLabel>
              <InputGroup>
                <FormControl value={selectedPhaseId} componentClass='select' placeholder='select' onChange={e => this.onChange(e)}>
                  <option value=''>All Phases</option>
                  {
                    this.props.phases.map(phase => <option key={phase.id} value={phase.id}> { phase.name } </option>)
                  }
                </FormControl>
                <InputGroup.Addon className='LoadingCircleWrapper'>
                  <LoadingStatsIndicator loading={ loading }/>
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </div>
        </Col>
      </Row>
    )
  }

  onChange(e) {
    const phaseId = e.target.value;
    const { params } = this.props.match;
    const url = this.props.location.pathname;
    this.props.updateUrlWithPhase(params.tournamentId, phaseId, url);
  }

};


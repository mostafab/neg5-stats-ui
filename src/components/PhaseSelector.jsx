import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';

export default class PhaseSelector extends React.Component {

  render() {
    const selectedPhaseId = this.props.selectedPhaseId;
    return (
      <Row className='PhaseSelector'>
        <Col lg={4} md={6} sm={6}>
          <div>
            <FormGroup>
              <ControlLabel>Select a Phase</ControlLabel>
              <FormControl value={selectedPhaseId} componentClass='select' placeholder='select' onChange={e => this.onChange(e)}>
                <option value=''>All Phases</option>
                {
                  this.props.phases.map(phase => <option key={phase.id} value={phase.id}> { phase.name } </option>)
                }
              </FormControl>
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


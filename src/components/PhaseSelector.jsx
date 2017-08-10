import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';

export default class PhaseSelector extends React.Component {
  
  render() {
    return (
      <Row>
        <Col lg={4} md={6} sm={6}>
          <div style={{ padding: '50px' }}>
            <FormGroup>
              <ControlLabel>Select a Phase</ControlLabel>
              <FormControl componentClass='select' placeholder='select'>
              </FormControl>
            </FormGroup>
          </div>
        </Col>
      </Row>
    )
  }

};


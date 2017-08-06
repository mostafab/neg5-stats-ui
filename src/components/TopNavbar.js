import React from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='https://neg5.org' target='_blank'>Neg 5 Stats</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl style={{'margin': '5px'}} type="text" placeholder="Find a tournament." />
        </FormGroup>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
);

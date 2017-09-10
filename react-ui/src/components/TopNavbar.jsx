import React from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <Navbar className='TopNavbar'>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'> Neg 5 Stats </Link>
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

import React from 'react';
import { Navbar, FormGroup } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Link } from 'react-router-dom';

export default (props) => {

  const _onChange = inputValue => {
    props.onTournamentSearchChange(inputValue.trim());
  }

  const _onSearch = () => {
    const query = props.tournamentSearchForm.query;
    if (query.length > 2) {
      props.onTournamentSearchQuerySubmitted(query);
    }
  }

  const dropdownOptions = props.tournamentSearchForm.tournaments;
  const labelKey = t => t.name;

  return (
    <Navbar className='TopNavbar'>
      <Navbar.Header style={{ marginTop: '5px' }}>
        <Navbar.Brand>
          <Link to='/'> Neg 5 Stats </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <AsyncTypeahead align='left' promptText='Find a tournament.' minLength={3} onSearch={() => _onSearch()} labelKey={labelKey}
              onInputChange={e => _onChange(e)} options={dropdownOptions}/>
          </FormGroup>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

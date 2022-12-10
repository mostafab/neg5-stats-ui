import React from 'react';
import { Navbar, FormGroup } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import Link from 'next/link';

import { useAppDispatch } from './../hooks/hooks';
import { onTournamentSearchChange, onTournamentSearchQuerySubmitted } from '../modules/landingPage/actions';

import { getTournamentUrlFromTournament } from './../util/url-util';

const TopNavbar = ({
  tournamentSearchForm,
  searchingForTournaments,
}) => {
  const dispatch = useAppDispatch();

  const labelKey = t => {
    const label = [t.name];
    if (t.questionSet) {
      label.push(['(', t.questionSet, ')'].join(''));
    }
    return label.join(' ');
  }

  const onChange = (inputValue) => {
    dispatch(onTournamentSearchChange(inputValue.trim()));
  }

  const onSearch = () => {
    const query = tournamentSearchForm.query;
    if (query.length > 2) {
      dispatch(onTournamentSearchQuerySubmitted(query));
    }
  }

  const renderMenuItemChildren = (option, index) => {
    const link = getTournamentUrlFromTournament(option);
    return (
      <div key={index} className='tournament-result'>
        <Link href={link}>
          {labelKey(option)}
        </Link>
      </div>
    );
  }

  return (
    <Navbar className='TopNavbar'>
      <Navbar.Header style={{ marginTop: '5px' }}>
        <Navbar.Brand>
          <Link href='/'> Neg 5 Stats </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
      <FormGroup>
        <AsyncTypeahead
          delay={300}
          isLoading={searchingForTournaments}
          placeholder='Find a tournament by name.'
          align='left'
          promptText='Find a tournament.'
          minLength={3}
          onSearch={() => onSearch()}
          labelKey={labelKey}
          onInputChange={e => onChange(e)}
          options={tournamentSearchForm.tournaments}
          renderMenuItemChildren={(option, _props, index) => renderMenuItemChildren(option, index)}
          filterBy={['name', 'id']}/>
      </FormGroup>
    </Navbar.Form>
    </Navbar>
  )
}

export default TopNavbar;



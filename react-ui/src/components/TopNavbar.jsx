import React, { Component } from 'react';
import { Navbar, FormGroup } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Link } from 'react-router-dom';

import { getTournamentUrlFromTournament } from './../util/url-util';

export default class TopNavbar extends Component {

  constructor(props) {
    super(props);

    this.labelKey = t => {
      const label = [t.name];
      if (t.questionSet) {
        label.push(['(', t.questionSet, ')'].join(''));
      }
      return label.join(' ');
    }
  }

  _onChange(inputValue) {
    this.props.onTournamentSearchChange(inputValue.trim());
  }

  _onSearch() {
    const query = this.props.tournamentSearchForm.query;
    if (query.length > 2) {
      this.props.onTournamentSearchQuerySubmitted(query);
    }
  }

  _renderMenuItemChildren(option, index) {
    const link = getTournamentUrlFromTournament(option);
    return (
      <div key={index} className='tournament-result'>
        <Link to={link}>
          {this.labelKey(option)}
        </Link>
      </div>
    );
  }

  render() {
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
              <AsyncTypeahead align='left' promptText='Find a tournament.' minLength={3} onSearch={() => this._onSearch()} labelKey={this.labelKey}
                onInputChange={e => this._onChange(e)} options={this.props.tournamentSearchForm.tournaments}
                renderMenuItemChildren={(option, props, index) => this._renderMenuItemChildren(option, index)} />
            </FormGroup>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

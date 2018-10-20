import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import slugUtil from './../../util/slug';

export default class TournamentSummaryPanel extends React.Component {
  
  static propTypes = {
    tournament: PropTypes.object.isRequired,
  }
  
  render() {
    const { name, id, location, date, questionSet } = this.props.tournament;
    const url = `/t/${id}/${slugUtil.slugify(name)}`;
    const link = <Link to={url}> { name } </Link>;
    return (
      <Panel header={ link } className='TournamentSummaryPanel'>
        <p> { location } </p>
        <p> { questionSet } </p>
        { date ? <p> { date.toDateString()} </p> : null }
      </Panel>
    )
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class TournamentSummaryPanel extends React.Component {
  
  static propTypes = {
    tournament: PropTypes.object.isRequired,
  }
  
  render() {
    const { name, id, location, date, questionSet } = this.props.tournament;
    const url = `/t/${id}`;
    const link = <Link to={url}> { name } </Link>;
    return (
      <Panel header={ link }>
        <p> { location } </p>
        <p> { questionSet } </p>
        { date ? <p> { date.toDateString()} </p> : null }
      </Panel>
    )
  }
}
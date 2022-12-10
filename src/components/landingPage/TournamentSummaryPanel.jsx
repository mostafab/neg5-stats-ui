import React from 'react';
import { Panel } from 'react-bootstrap';
import Link from 'next/link';

const TournamentSummaryPanel = ({
  tournament,
}) => {
  const { name, id, location, date, questionSet, slug } = tournament;
  const url = `/t/${id}/${slug}/team-standings`;
  const link = <Link href={url}>{name}</Link>;
  return (
    <Panel header={link} className='TournamentSummaryPanel'>
      <p> {location} </p>
      <p> {questionSet} </p>
      { date ? <p> { new Date(date).toDateString()} </p> : null }
    </Panel>
  )  
}

export default TournamentSummaryPanel;

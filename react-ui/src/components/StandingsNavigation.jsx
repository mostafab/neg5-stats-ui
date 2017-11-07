import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

const URL = '/t/{tournamentId}/{slug}/{page}?phase={phaseId}';

const LINKS = [
  { display: 'Standings', link: 'team-standings' },
  { display: 'Individuals', link: 'individuals' },
  { display: 'Team Full', link: 'team-full' },
  { display: 'Individual Full', link: 'player-full' },
  { display: 'Round Report', link: 'round-report' }
]

export default class StandingsNavigation extends React.Component {
  render() {
    return (
      <Breadcrumb className='StandingsNavigation'>
        {
          LINKS.map(link => this.createLink(link))
        }
      </Breadcrumb>
    )
  }

  createLink(link) {
    let formattedUrl = URL.replace('{tournamentId}', this.props.tournamentId)
              .replace('{page}', link.link)
              .replace('{slug}', this.props.slug)
    if (this.props.phaseId) {
      formattedUrl = formattedUrl.replace('{phaseId}', this.props.phaseId)
    } else {
      formattedUrl = formattedUrl.replace('?phase={phaseId}', '');
    }
    const isMatch = this.props.location.pathname.indexOf(link.link) !== -1;
    if (isMatch) {
      return <Breadcrumb.Item key={link.link} active> { link.display } </Breadcrumb.Item>;
    }
    return <Breadcrumb.Item key={link.link}>
            <Link to={formattedUrl}> { link.display } </Link>
          </Breadcrumb.Item>;
  }
};

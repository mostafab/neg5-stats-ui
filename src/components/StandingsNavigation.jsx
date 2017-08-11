import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const URL = '/t/{tournamentId}/{page}?phase={phaseId}';

const LINKS = [
  { display: 'Standings', link: 'team-standings' },
  { display: 'Individuals', link: 'individuals' },
  { display: 'Team Full', link: 'team-full' },
  { display: 'Individual Full', link: 'individuals-full' },
  { display: 'Round Report', link: 'round-report' }
]

export default class StandingsNavigation extends React.Component {
  render() {
    return (
      <Breadcrumb>
        {
          LINKS.map(link => this.createLink(link))
        }
      </Breadcrumb>
    )
  }

  createLink(link) {
    let formattedUrl = URL.replace('{tournamentId}', this.props.tournamentId)
              .replace('{page}', link.link)
    if (this.props.phaseId) {
      formattedUrl = formattedUrl.replace('{phaseId}', this.props.phaseId)
    } else {
      formattedUrl = formattedUrl.replace('?phase={phaseId}', '');
    }
    return <Breadcrumb.Item key={link.link} href={formattedUrl}> { link.display } </Breadcrumb.Item>
  }
};

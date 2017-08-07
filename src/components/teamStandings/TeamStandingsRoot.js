import React from 'react';
import TeamStandingsContent from './TeamStandingsContent';

export default class TeamStandingsRoot extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <TeamStandingsContent />
      </div>
    )
  }
}

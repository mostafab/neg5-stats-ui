import React from 'react';
import { Grid, Row, Col, Jumbotron, Button, Panel } from 'react-bootstrap';

import TournamentPanelsWrapper from './TournamentPanelsWrapper';

export default class LandingPageWrapper extends React.Component {
  
  componentDidMount() {
    this.props.getRecentTournaments(30);
  }
  
  render() {
    console.log(this.props);
    return ( 
      <div className='LandingPageWrapper'>
        <Grid>
          <Row>
            <Jumbotron>
              <h1>Welcome to the Neg 5 stats repository!</h1>
              <p>This is the new home for all things Neg 5 stats. You can search for a specific tournament or find stats for recent tournaments below.</p>
            </Jumbotron>
          </Row>
          <TournamentPanelsWrapper tournaments={ this.props.recentTournaments }/>
        </Grid>
      </div>
    )
  }
};
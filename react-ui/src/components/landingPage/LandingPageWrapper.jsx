import React from 'react';
import { Grid, Row, Jumbotron } from 'react-bootstrap';

import TournamentPanelsWrapper from './TournamentPanelsWrapper';
import TournamentSearchForm from './TournamentSearchForm'; 

const PANELS_PER_ROW = 3;

export default class LandingPageWrapper extends React.Component {
  
  componentDidMount() {
    this.props.getRecentTournaments(365);
  }
  
  render() {
    const { recentTournaments, searchForm, changeFocusedDate, changeDates } = this.props;
    return ( 
      <div className='LandingPageWrapper'>
        <Grid>
          <Row>
            <Jumbotron>
              <h1>Welcome to the Neg 5 stats repository!</h1>
              <p>
                This is the new home for all things Neg 5 stats. You can search for a specific tournament or find stats for past and upcoming tournaments below.
              </p>
              <TournamentSearchForm searchForm={ searchForm } changeFocusedDate={changeFocusedDate} changeDates={changeDates}/>
            </Jumbotron>
          </Row>
          <TournamentPanelsWrapper tournaments={ this.props.recentTournaments } panelsPerRow={PANELS_PER_ROW}/>
        </Grid>
      </div>
    )
  }
};
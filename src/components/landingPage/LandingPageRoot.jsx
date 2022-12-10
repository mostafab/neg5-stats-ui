import React, { Component } from 'react';
import { Grid, Row, Jumbotron } from 'react-bootstrap';
import moment from 'moment';

import TournamentPanelsWrapper from './TournamentPanelsWrapper';
import TournamentSearchForm from './TournamentSearchForm'; 

const PANELS_PER_ROW = 3;
const DATE_FORMAT = 'MMMM Do, YYYY';

export default class LandingPageWrapper extends Component {

  createResultMessage() {
    const { searchForm, recentTournaments } = this.props;
    const { oldStartDate, oldEndDate } = searchForm;
    let resultMessage =  null;
    if (oldStartDate && oldEndDate) {
      const startDateFormatted = moment(oldStartDate).format(DATE_FORMAT);
      const endDateFormatted = moment(oldEndDate).format(DATE_FORMAT);
      const len = recentTournaments.length;
      resultMessage = <h4>
        There { len === 1 ? 'is' : 'are' } <b>{ recentTournaments.length }</b> { len === 1 ? 'tournament' : 'tournaments' } between { startDateFormatted } and { endDateFormatted }
        </h4>;
    }
    return resultMessage;
  }
  
  render() {
    const { searchForm, recentTournaments } = this.props;
    return ( 
      <div className='LandingPageWrapper'>
        <Grid>
          <Row>
            <Jumbotron>
              <h1>Welcome to the Neg 5 stats repository!</h1>
              <p>
                This is the new home for all things Neg 5 stats. You can search for a specific tournament or find stats for past and upcoming tournaments below.
              </p>
              <TournamentSearchForm searchForm={searchForm} />
              { this.createResultMessage() }
            </Jumbotron>
          </Row>
          <TournamentPanelsWrapper tournaments={ recentTournaments } panelsPerRow={PANELS_PER_ROW}/>
        </Grid>
      </div>
    )
  }
};
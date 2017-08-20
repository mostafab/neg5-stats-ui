import React from 'react';
import { Grid, Row, Jumbotron } from 'react-bootstrap';

import TournamentPanelsWrapper from './TournamentPanelsWrapper';
import TournamentSearchForm from './TournamentSearchForm'; 

const PANELS_PER_ROW = 3;
const DAYS_SINCE = 700;
const DATE_FORMAT = 'MMMM Do, YYYY';

export default class LandingPageWrapper extends React.Component {
  
  componentDidMount() {
    const { startDate, endDate } = this.props.searchForm;
    this.props.getTournamentsBetweenDates(startDate.toDate(), endDate.toDate());
  }

  createResultMessage() {
    const { searchForm, recentTournaments } = this.props;
    const { oldStartDate, oldEndDate } = searchForm;
    let resultMessage =  null;
    if (oldStartDate && oldEndDate) {
      const startDateFormatted = oldStartDate.format(DATE_FORMAT);
      const endDateFormatted = oldEndDate.format(DATE_FORMAT);
      resultMessage = <h4>There are <b>{ recentTournaments.length }</b> tournament(s) between { startDateFormatted } and { endDateFormatted } </h4>;
    }
    return resultMessage;
  }
  
  render() {
    const { recentTournaments, searchForm, changeFocusedDate, changeDates, getTournamentsBetweenDates } = this.props;
    const { oldStartDate, oldEndDate } = searchForm;
    return ( 
      <div className='LandingPageWrapper'>
        <Grid>
          <Row>
            <Jumbotron>
              <h1>Welcome to the Neg 5 stats repository!</h1>
              <p>
                This is the new home for all things Neg 5 stats. You can search for a specific tournament or find stats for past and upcoming tournaments below.
              </p>
              <TournamentSearchForm searchForm={ searchForm } changeFocusedDate={changeFocusedDate} changeDates={changeDates}
                getTournamentsBetweenDates={getTournamentsBetweenDates}/>
              { this.createResultMessage() }
            </Jumbotron>
          </Row>
          <TournamentPanelsWrapper tournaments={ this.props.recentTournaments } panelsPerRow={PANELS_PER_ROW}/>
        </Grid>
      </div>
    )
  }
};
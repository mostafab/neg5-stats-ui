import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { Button } from 'react-bootstrap';

export default class TournamentSearchForm extends React.Component {
  
  static propTypes = {
    searchForm: PropTypes.object,
    changeDates: PropTypes.func.isRequired,
    changeFocusedDate: PropTypes.func.isRequired,
    getTournamentsBetweenDates: PropTypes.func.isRequired,
  }

  onDatesChanged(startDate, endDate) {
    this.props.changeDates(startDate, endDate);
  }

  onFocusChange(focusedInput) {
    this.props.changeFocusedDate(focusedInput);
  }

  onClick() {
    const { startDate, endDate } = this.props.searchForm;
    if (startDate && endDate) {
      this.props.getTournamentsBetweenDates(startDate.toDate(), endDate.toDate());
    }
  }

  render() {
    const { startDate, endDate, focusedInput } = this.props.searchForm;
    return (
      <div>
        <DateRangePicker
          startDate={startDate} // momentPropTypes.momentObj or null,
          endDate={endDate} // momentPropTypes.momentObj or null,
          isOutsideRange={() => false}
          onDatesChange={({ startDate, endDate }) => this.onDatesChanged(startDate, endDate)} // PropTypes.func.isRequired,
          focusedInput={ focusedInput } // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={newFocusedInput => this.onFocusChange(newFocusedInput)} // PropTypes.func.isRequired,
          />
          <Button className='SubmitButton' bsStyle="primary" onClick={() => this.onClick()}> Search </Button>
      </div>
    )
  }
};

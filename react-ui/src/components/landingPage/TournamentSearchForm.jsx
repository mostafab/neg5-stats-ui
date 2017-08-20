import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { Button } from 'react-bootstrap';

export default class TournamentSearchForm extends React.Component {
  
  static propTypes = {
    searchForm: PropTypes.object,
  }

  onDatesChanged(startDate, endDate) {

  }

  onFocusChange(focusedInput) {
    console.log(focusedInput);
  }

  render() {
    const { startDate, endDate } = this.props.searchForm;
    return (
      <div>
        <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                endDate={endDate} // momentPropTypes.momentObj or null,
                onDatesChange={({ startDate, endDate }) => this.onDatesChanged(startDate, endDate)} // PropTypes.func.isRequired,
                focusedInput={this.props.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.onFocusChange(focusedInput)} // PropTypes.func.isRequired,
          />
          <Button className='SubmitButton' bsStyle="primary"> Search </Button>
      </div>
    )
  }
};

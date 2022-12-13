import React from 'react';
import { DateRangePicker } from 'react-dates';
import { Button } from 'react-bootstrap';
import moment from 'moment';

import { useAppDispatch } from './../../hooks/hooks';
import { changeFocusedDate, getTournamentsBetweenDates, changeDates } from './../../modules/landingPage/actions';

const TournamentSearchForm = ({
  searchForm,
}) => {
  const { startDate, endDate, focusedInput } = searchForm;
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (startDate && endDate) {
      dispatch(getTournamentsBetweenDates(startDate, endDate));
    }
  }
  return (
    <div className='TournamentSearchForm'>
      <DateRangePicker
        startDate={startDate ? moment(startDate) : null} // momentPropTypes.momentObj or null,
        startDateId="start_id"
        endDate={endDate ? moment(endDate) : endDate} // momentPropTypes.momentObj or null,
        endDateId="end_id"
        isOutsideRange={() => false}
        onDatesChange={({startDate, endDate}) => dispatch(changeDates(startDate, endDate))} // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={newFocusedInput => dispatch(changeFocusedDate(newFocusedInput))} // PropTypes.func.isRequired,
        />
        <Button className='SubmitButton' bsStyle="primary" onClick={() => onClick()}> Search </Button>
    </div>
  )
};

export default TournamentSearchForm;


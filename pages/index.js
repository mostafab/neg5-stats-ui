import 'regenerator-runtime/runtime';
import React from 'react';

import { wrapper } from './../src/store';
import LandingPageWrapper from '../src/containers/landingPage/LandingPageWrapper';

import { getTournamentsBetweenDates } from './../src/modules/landingPage/actions';

const IndexPage = () => {
  return <LandingPageWrapper />;
}

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, getState }) => {
        return async () => {
            const { startDate, endDate } = getState().landingPage.searchForm;
            await dispatch(getTournamentsBetweenDates(startDate, endDate));
        }
    }
)

export default IndexPage;

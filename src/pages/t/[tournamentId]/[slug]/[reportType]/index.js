import 'regenerator-runtime/runtime';
import React from 'react';

import { wrapper } from '../../../../../store';

import TeamStandings from '../../../../../containers/stats/TeamStandings';
import TeamFullStandings from '../../../../../containers/stats/TeamFullStandings';
import IndividualStandings from '../../../../../containers/stats/IndividualStandings';
import IndividualFullStandings from '../../../../../containers/stats/IndividualFullStandings';
import RoundReport from '../../../../../containers/stats/RoundReport';

import { getTournamentInformation, setInitialPhaseOnLoad } from '../../../../../modules/tournamentStatsWrapper/actions';
import { requestTeamStandings } from '../../../../../modules/teamStandings/actions';

import { requestFullTeamStandings } from '../../../../../modules/fullTeamStandings/actions';
import { getIndividualStandings } from '../../../../../modules/individualStandings/actions';
import { requestFullIndividualStandings } from '../../../../../modules/fullIndividualStandings/actions';
import { getRoundReport } from '../../../../../modules/roundReport/actions';

import { reportTypes } from '../../../../../util/stats-util';

const validReportTypes = Object.values(reportTypes);

const StatsPage = ({ reportType }) => {
    switch (reportType) {
        case reportTypes.teamStandings:
            return <TeamStandings />;
        case reportTypes.teamFull:
            return <TeamFullStandings />;
        case reportTypes.individual:
            return <IndividualStandings />;
        case reportTypes.individualFull:
            return <IndividualFullStandings />;
        case reportTypes.roundReport:
            return <RoundReport />;
    }
}

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, getState }) => {
        return async context => {
            const { tournamentId, reportType, slug: givenSlug } = context.params;
            // If they gave an invalid reportType, just redirect the user to team standings
            if (validReportTypes.indexOf(reportType) === -1) {
                const redirectUrl = `/t/${tournamentId}`;
                return {
                    redirect: {
                        destination: redirectUrl,
                        permanent: true,
                    }
                }
            }
            const { phase : phaseId = null } = context.query;
            await Promise.all([
                dispatch(setInitialPhaseOnLoad({ phaseId })),
                dispatch(getTournamentInformation(tournamentId)),
            ])
            const { slug, name } = getState().globalState.loadedTournament;
            if (slug && slug !== givenSlug) {
                // This handles scenarios like /t/:tournamentId/team-standings
                const targetReportType = validReportTypes.indexOf(givenSlug) >= 0
                    ? givenSlug
                    : reportType
                const phaseQuery = phaseId ? `?phase=${phaseId}` : '';
                const redirectUrl = `/t/${tournamentId}/${slug}/${targetReportType}${phaseQuery}`;
                return {
                    redirect: {
                        destination: redirectUrl,
                        permanent: true,
                    }
                }
            }
            let reportTitle;
            switch (reportType) {
                case reportTypes.teamStandings:
                    reportTitle = 'Standings'; 
                    await dispatch(requestTeamStandings(tournamentId, phaseId));
                    break;
                case reportTypes.teamFull:
                    reportTitle = 'Team Matches';
                    await Promise.all([
                        dispatch(getIndividualStandings(tournamentId, phaseId)),
                        dispatch(requestFullTeamStandings(tournamentId, phaseId))
                    ]);
                    break;
                case reportTypes.individual:
                    reportTitle = 'Player Standings';
                    await dispatch(getIndividualStandings(tournamentId, phaseId));
                    break;
                case reportTypes.individualFull:
                    reportTitle = 'Player Matches';
                    await dispatch(requestFullIndividualStandings(tournamentId, phaseId));
                    break;
                case reportTypes.roundReport:
                    reportTitle = 'Round Report';
                    await dispatch(getRoundReport(tournamentId, phaseId));
                    break;
                default:
                    break;
            }
            return {
                props: {
                    title: `${name} - ${reportTitle} | Neg 5 Stats`,
                    reportType,
                }
            }
        }
    }
)

export default StatsPage;






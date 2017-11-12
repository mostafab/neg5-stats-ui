import { Router } from 'express';
import { checkStatsCache, addStatsToCache } from './../middleware/check-stats-cache';
import StatConstants from './../cache/constants';
import { getFullIndividualStandings,
  getFullTeamStandings,
  getIndividualStandings,
  getRoundReport,
  getTeamStandings } from './../clients/stats-client';

const router = Router({ mergeParams: true });

router.get('/team-standings', checkStatsCache(StatConstants.TEAM_STANDINGS), async (request, response) => {
  try {
    const standings = await getTeamStandings(request.params.tournamentId, request.query.phase);
    addStatsToCache(request, StatConstants.TEAM_STANDINGS, standings);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/individuals', checkStatsCache(StatConstants.INDIVIDUAL_STANDINGS), async (request, response) => {
  try {
    const standings = await getIndividualStandings(request.params.tournamentId, request.query.phase);
    addStatsToCache(request, StatConstants.INDIVIDUAL_STANDINGS, standings);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/team-full', checkStatsCache(StatConstants.TEAM_FULL_STANDINGS), async (request, response) => {
  try {
    const standings = await getFullTeamStandings(request.params.tournamentId, request.query.phase);
    addStatsToCache(request, StatConstants.TEAM_FULL_STANDINGS, standings);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/player-full', checkStatsCache(StatConstants.INDIVIDUAL_FULL), async (request, response) => {
  try {
    const standings = await getFullIndividualStandings(request.params.tournamentId, request.query.phase);
    addStatsToCache(request, StatConstants.INDIVIDUAL_FULL, standings);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/round-report', checkStatsCache(StatConstants.ROUND_REPORT), async (request, response) => {
  try {
    const standings = await getRoundReport(request.params.tournamentId, request.query.phase);
    addStatsToCache(request, StatConstants.ROUND_REPORT, standings);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

export default router;
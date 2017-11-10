import { Router } from 'express';
import { getRecentTournaments, getTournamentBrackets, getTournamentPhases,
  getTournamentPointScheme, getTournamentsBetweenDates, getTournamentsByName,
  getTournamentInfo } from './../clients/tournaments-client';

const router = Router({ mergeParams: true });

router.get('/findRecent', async (request, response) => {
  try {
    response.send({ result: await getRecentTournaments(request.query.days) });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/byName', async (request, response) => {
  try {
    response.send({ result: await getTournamentsByName(request.query.searchQuery )});
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/byDateRange', async (request, response) => {
  try {
    response.send({ result: await getTournamentsBetweenDates(request.query.startDate, request.query.endDate) });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/:tournamentId/info', async (request, response) => {
  console.log('hit endpoint');
  try {
    response.send({ result: await getTournamentInfo(request.params.tournamentId) })
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/:tournamentId/brackets', async (request, response) => {
  try {
    const brackets = await getTournamentBrackets(request.params.tournamentId);
    response.send({ result: brackets });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/:tournamentId/phases', async (request, response) => {
  try {
    response.send({ result: await getTournamentPhases(request.params.tournamentId) });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/:tournamentId/point-scheme', async (request, response) => {
  try {
    response.send({ result: await getTournamentPointScheme(request.params.tournamentId) });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

export default router;
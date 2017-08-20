import { Router } from 'express';
import { getFullIndividualStandings,
  getFullTeamStandings,
  getIndividualStandings,
  getRoundReport,
  getTeamStandings } from './../clients/stats-client';

const router = Router({ mergeParams: true });

router.get('/team-standings', async (request, response) => {
  try {
    const standings = await getTeamStandings(request.params.tournamentId, request.query.phase);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/individuals', async (request, response) => {
  try {
    const standings = await getIndividualStandings(request.params.tournamentId, request.query.phase);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/team-full', async (request, response) => {
  try {
    const standings = await getFullTeamStandings(request.params.tournamentId, request.query.phase);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/player-full', async (request, response) => {
  try {
    const standings = await getFullIndividualStandings(request.params.tournamentId, request.query.phase);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

router.get('/round-report', async (request, response) => {
  try {
    const standings = await getRoundReport(request.params.tournamentId, request.query.phase);
    return response.send( { result: standings });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

export default router;
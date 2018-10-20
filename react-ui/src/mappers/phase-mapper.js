import { orderBy } from 'lodash';

export const mapPhases = phases => orderBy(phases.map(mapSinglePhase), ['name'])

export const mapSinglePhase = phase => ({
  id: phase.id,
  name: phase.name,
  tournamentId: phase.tournamentId,
});

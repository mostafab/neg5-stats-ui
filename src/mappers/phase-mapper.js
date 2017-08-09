export const mapPhases = phases => phases.map(mapSinglePhase);

export const mapSinglePhase = phase => ({
  id: phase.id,
  name: phase.name,
  tournamentId: phase.tournament_id,
});

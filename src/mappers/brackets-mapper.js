export const mapBrackets = brackets => brackets.map(mapSingleBracket);

export const mapSingleBracket = bracket => ({
  id: bracket.division_id,
  name: bracket.division_name,
  tournamentId: bracket.tournament_id,
  phaseId: bracket.phase_id,
  phaseName: bracket.phase_name,
});

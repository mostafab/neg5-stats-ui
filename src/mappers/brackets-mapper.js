import { orderBy } from "lodash";

export const mapBrackets = (brackets) =>
  orderBy(brackets.map(mapSingleBracket), ["name"]);

export const mapSingleBracket = (bracket) => ({
  id: bracket.id,
  name: bracket.name,
  tournamentId: bracket.tournamentId,
  phaseId: bracket.phaseId,
});

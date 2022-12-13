export const getTournamentUrlFromTournament = (tournament) => {
  return `/t/${tournament.id}`;
};

export default {
  getTournamentUrlFromTournament,
};

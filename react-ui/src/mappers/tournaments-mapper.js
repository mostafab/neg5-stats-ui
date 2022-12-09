export const mapTournaments = tournaments =>
  Object.assign([], tournaments.map(mapSingleTournament)).sort((first, second) => {
   if (first.date > second.date) {
     return -1;
   }
   if (second.date > first.date) {
     return 1;
   }
   return 0;
  });

export const mapSingleTournament = tournament => ({
  id: tournament.id,
  location: tournament.location,
  name: tournament.name,
  questionSet: tournament.questionSet,
  date: tournament.tournamentDate ? new Date(tournament.tournamentDate) : null,
});

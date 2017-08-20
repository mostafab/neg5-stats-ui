import moment from 'moment';

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
  questionSet: tournament.question_set,
  date: tournament.tournament_date ? new Date(tournament.tournament_date) : null,
  timeDifference: getDifferenceInTimeBetweenNowAndTournamentDate(tournament),
});

const getDifferenceInTimeBetweenNowAndTournamentDate = tournament => {
  if (!tournament.tournament_date) {
    return null;
  }
  const tournamentDate = moment(tournament.tournament_date);
  const now = moment();

  let past;
  let future;
  let tournamentWasInPast = tournamentDate.diff(now, 'days') < 0;
  let suffix;

  if (tournamentWasInPast) {
    past = moment(tournamentDate);
    future = moment(now);
    suffix = 'ago';
  } else {
    past = moment(now);
    future = moment(tournamentDate);
    suffix = 'from now';
  }

  const values = [ 
    { name: 'months', total: 0 },
    { name: 'weeks', total: 0 },
    { name: 'days', total: 0 },
  ];
  values.forEach(value => {
    const timeToGo = future.diff(past, value.name); // Find difference in each unit of time and increase the older time by that much each iteration.
    value.total = timeToGo;
    past.add(timeToGo, value.name);
  });
  
  const timeString = values.filter(value => value.total > 0)
    .map(value => `${value.total} ${value.name}`)
    .join(', ');

  return timeString + ` ${suffix}`;
}

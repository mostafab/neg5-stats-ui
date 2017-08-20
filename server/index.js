import express from 'express';
import path from 'path';

import './config';
import statsApiRouter from './api/stats-router';
import tournamentApiRouter from './api/tournament-router';

const app = express();
const PORT = process.env.PORT || 3000;

// Priority serve any static files.
app.use('/neg5.stats.web-server/', express.static(path.resolve(__dirname, '../react-ui/build')));

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Answer API requests.
app.use('/api/t/:tournamentId/stats', statsApiRouter);
app.use('/api/t', tournamentApiRouter);

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
import express from 'express';
import path from 'path';

import './config';
import apiRouter from './api/router';

const app = express();
const PORT = process.env.PORT || 3000;

// Priority serve any static files.
app.use('/neg5.stats.web-server/', express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.use('/api', apiRouter);

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
import express from 'express';
import path from 'path';

import httpProxy from 'express-http-proxy';
import morgan from 'morgan';
import httpsEnforce from 'express-sslify';

import './config';

import statsApiRouter from './api/stats-router';
import tournamentApiRouter from './api/tournament-router';

const app = express();
const PORT = process.env.PORT || 3000;
const ONE_WEEK_MS = 1000 * 60 * 60 * 24 * 7; 

if (process.env.NODE_ENV === 'production') {
  app.use(httpsEnforce.HTTPS( { trustProtoHeader: true }));
}
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan());
}

const pathToIndexHtml = path.resolve(__dirname, '../react-ui/build', 'index.html');

// Priority serve any static files.
const cacheTime = process.env.NODE_ENV === 'production' ? ONE_WEEK_MS : 0;
app.use('/neg5.stats.web-server/', express.static(path.resolve(__dirname, '../react-ui/build'), { maxAge: cacheTime }));

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Answer API requests.
app.use('/api/t/:tournamentId/stats', statsApiRouter);
app.use('/api/t', tournamentApiRouter);

// Proxy requests to /neg5-api to the Spark Neg5 service
app.use('/neg5-api', httpProxy(process.env.NEG5_API_HOST, {
  proxyReqPathResolver: req => `/neg5-api${req.url}`
}));

// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => {
  response.sendFile(pathToIndexHtml);
});

app.listen(PORT, function () {
  console.log(`[neg5-stats-web] Web Server Listening on port ${PORT}`);
});
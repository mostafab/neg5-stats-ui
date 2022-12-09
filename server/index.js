import express from 'express';
import path from 'path';

import httpProxy from 'express-http-proxy';
import morgan from 'morgan';
import httpsEnforce from 'express-sslify';

import './config';

const app = express();
const PORT = process.env.PORT || 3000;
const ONE_WEEK_MS = 1000 * 60 * 60 * 24 * 7; 

if (process.env.NODE_ENV === 'production') {
  app.use(httpsEnforce.HTTPS( { trustProtoHeader: true }));
}
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan());
}

// Priority serve any static files.
const cacheTime = process.env.NODE_ENV === 'production' ? ONE_WEEK_MS : 0;
app.use('/neg5.stats.web-server/', express.static(path.resolve(__dirname, '../react-ui/build'), { maxAge: cacheTime }));

// Enable CORS
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Proxy requests to /neg5-api to the backend API
app.use('/neg5-api', httpProxy(process.env.NEG5_API_HOST, {
  proxyReqPathResolver: req => `/neg5-api${req.url}`
}));

const pathToIndexHtml = path.resolve(__dirname, '../react-ui/build', 'index.html');
// All remaining requests return the React app, so it can handle routing.
app.get('*', (request, response) => {
  response.sendFile(pathToIndexHtml);
});

app.listen(PORT, function () {
  console.log(`[neg5-stats-web] Web Server Listening on port ${PORT}`);
});
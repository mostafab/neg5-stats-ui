import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, './.env'),
});

if (!process.env.SERVER_ENV) {
  throw new Error('SERVER_ENV must be set as an environment variable.');
}

(() => {
  const ENV = process.env.SERVER_ENV;
  const STATS_HOST = process.env[`STATS_HOST_${ENV}`];
  if (!STATS_HOST) {
    throw new Error(`No STATS_HOST_${ENV} environment variable found for given SERVER_ENV: ${ENV}`);
  }
  process.env.STATS_HOST = STATS_HOST;
})();

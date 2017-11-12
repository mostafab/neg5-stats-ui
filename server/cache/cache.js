import NodeCache from 'node-cache';
import config from './../config';

const ttl = parseInt(process.env.STATS_CACHE_TTL) || 0;

const StatsCacheSingleton = new NodeCache({ stdTTL: ttl });

console.log(`Created stats cache with config ttl: ${ttl}s.`);

export default StatsCacheSingleton;

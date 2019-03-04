"use strict";
import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient(6379, 'redis');
const getCacheByKey = promisify(client.get).bind(client);

client.on('error', 
  err => console.log('[ERR: Redis]', err.message)
);

const RedisClient = {};

RedisClient.getCache = async key => {
  let cachedResponse = await getCacheByKey(`/${key}`);
  console.log('cached response');
  console.log(cachedResponse);

  return cachedResponse;
};

RedisClient.setCache = forecast => {
  client.setex(
    `/${forecast.capital.country}`,
    5000,
    JSON.stringify(forecast)
  );
};

export default RedisClient;

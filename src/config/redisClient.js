const redis = require('redis');
require('dotenv').config();

//redis connection
const redisClient = redis.createClient({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
})

//redis version 4 required connect method
redisClient.connect();

redisClient.on('error', function (error) {
  console.log(error.message)
});

redisClient.on('connect', function (error) {
    console.log('Client connected to redis...')
  });

  redisClient.on('ready', () => {
  console.log('Client connected to redis and ready to use...')
})

redisClient.on('end', () => {
  console.log('Client disconnected from redis')
})

process.on('SIGINT', () => {
    redisClient.quit()
})

//module.exports = redisClient;

/**
 * * this the method for get any key's value.
 */
module.exports.getData = async (redisKey) => {
  return redisClient.get(redisKey, (err, result) => {
      return result;
  });
}

/**
 * * method to set any key with the tts value.
 */

module.exports.setData = async (redisKey, value, ttl) => {
  if (ttl) {
      return redisClient.set(redisKey, value, 'EX', ttl);
  } else {
      return redisClient.set(redisKey, value);
  }
}
/**
 * * method to delete the key from redis.
 */

module.exports.delete = async (redisKey) => {
  return redisClient.delete(redisKey);
}

/**
 * * method to lpush in the redis list.
 */
module.exports.lpush = async () => {
  return redisClient.lpush(redisKey, value, (err, result) => {
      if (err) {
          console.log(err);
      }
      return result;
  })
}

/**
 * * method to rpush in the redis list.
 */
module.exports.rpush = async () => {
  return client.rpush(redisKey, value, (err, result) => {
      if (err) {
          console.log(err);
          return result;
      }
      return result
  })
}

/**
 * * method to lrange in the redis list.
 */
module.exports.lrange = async (redisKey, start, stop) => {
  return client.lrange(redisKey, start, stop, function (err, result) {
      if (err) {
          console.log(err);
          return err;
      }
      return result;
  })
}
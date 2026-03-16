import { createClient } from "redis";

const globalForRedis = globalThis;

export const redis = globalForRedis.redis || createClient({
    url: process.env.REDIS_URL,
});

if (!globalForRedis.redis) {
    globalForRedis.redis = redis;
}

if (!redis.isOpen) {
    await redis.connect();
}
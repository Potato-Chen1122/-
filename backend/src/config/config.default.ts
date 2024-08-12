import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1721527838591_1330',
  koa: {
    port: 8080,
  },
  cors: {
    origin: "*",
  },
} as MidwayConfig;

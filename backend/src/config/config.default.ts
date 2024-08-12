import { MidwayConfig } from '@midwayjs/core';


export default {
  keys: '1721527838591_1330',
  koa: {
    port: 8080,
  },
  cors: {
    origin: "*",
  },
  jwt: {
    secret: '1145141919810', 
    expiresIn: '1d',
  },
  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'midway',
    synchronize: true, 
    logging: false,
  },
} as MidwayConfig;

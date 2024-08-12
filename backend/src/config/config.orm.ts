import { DataSourceOptions } from 'typeorm';

export const ORMConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'midway',
  synchronize: true,
  logging: false,
  entities: ['/interface.ts'],
};


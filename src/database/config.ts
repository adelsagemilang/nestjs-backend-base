import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: config.get('DATABASE.HOST'),
  port: config.get('DATABASE.PORT'),
  username: config.get('DATABASE.USERNAME'),
  password: config.get('DATABASE.PASSWORD'),
  database: config.get('DATABASE.DBNAME'),
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
};
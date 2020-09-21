import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  // type: 'postgres',
  // host: '192.168.15.254',
  // port: 5432,
  // username: 'postgres',
  // password: '12345',
  // database: 'typeteste',
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // synchronize: true,
  // name: 'oracle',
  type: 'oracle',
  host: 'localhost',
  port: 1521,
  sid: 'XE',
  username: 'mark',
  password: 'xxx',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from './config/typeorm.config';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}

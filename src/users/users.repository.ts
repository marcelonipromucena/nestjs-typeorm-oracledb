import { Repository, EntityRepository } from 'typeorm';

import { User } from './user.entity';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async getAllUsers(): Promise<User[]> {
    const query = this.createQueryBuilder();

    try {
      const users: User[] = await query.getMany();
      return users;
    } catch (error) {
      throw new InternalServerErrorException('There was an error.');
    }
  }
}

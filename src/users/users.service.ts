import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const users: User[] = await this.usersRepository.getAllUsers();
    return users;
  }

  async getById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ id });
    if (!user) {
      throw new NotFoundException(
        `There\s no user with the specified id ${id} `,
      );
    }
    return user;
  }

  async saveUser(userDto: CreateUserDto): Promise<User> {
    const { email, password } = userDto;

    const user = new User();
    user.id = 123;
    user.email = email;
    user.password = password;

    try {
      await user.save();
      return user;
    } catch (error) {
      console.error(error.stack);
      throw new BadRequestException(
        'There was an error, please check all the fields.',
      );
    }
  }

  async updateUser(id: number, userDto: UpdateUserDto) {
    const user = this;
  }
}

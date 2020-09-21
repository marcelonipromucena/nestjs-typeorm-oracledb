import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getAllUsers(): Promise<User[]> {
    const users: Promise<User[]> = this.userService.getAllUsers();
    return users;
  }

  @Get('/:id')
  getById(@Param('id') id: number): Promise<User> {
    const user: Promise<User> = this.userService.getById(id);
    return user;
  }

  @Post('/')
  saveUser(@Body() userDto: CreateUserDto): Promise<User> {
    const user: Promise<User> = this.userService.saveUser(userDto);
    return user;
  }

  //   @Patch('/:id')
  //   updateUser(@Param('id') id: number, @Body() user: User): Promise<void> {}

  //   @Delete('/:id')
  //   deleteUser(@Param('id') id: number) {}
}

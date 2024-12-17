import { Controller, Post, Body, Inject } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import {
  CreateUserDto,
  UpdateUserDto,
  UserDto,
} from 'src/domain/model/user/user.dto';

import { ApiBearerAuth } from '@nestjs/swagger';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';
import { BaseController } from './base.controller';

@ApiBearerAuth()
@Controller('users')
export class UserController extends BaseController<
  UserDto,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface<UserDto>,
    private readonly auth: AuthService,
  ) {
    super(userRepository, ['ownedPortal', 'portals']);
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    const hashedPassword = await this.auth.hashPassword(user.password);
    user = {
      ...user,
      password: hashedPassword,
    };
    return this.userRepository.create(user);
  }
}

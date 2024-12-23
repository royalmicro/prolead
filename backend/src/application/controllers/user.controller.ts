import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import {
  CreateUserDto,
  UpdateUserDto,
  UserDto,
} from 'src/domain/model/user/user.dto';

import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';
import { BaseController } from './base.controller';
import { AuthGuard } from '../services/auth/auth.guard';

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
    super(userRepository, ['portal']);
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

  @ApiResponse({
    status: 400,
    description: 'Validation error if portalId is missing or invalid',
  })
  @ApiResponse({
    status: 404,
    description: 'Portal not found',
  })
  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req) {
    return super.findAll(req);
  }
}

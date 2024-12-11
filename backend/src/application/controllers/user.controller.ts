import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { CreateUserDto } from 'src/domain/model/user/user.dto';

import { ApiBearerAuth } from '@nestjs/swagger';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';

@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepositoryInterface,
    private readonly auth: AuthService,
  ) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    const hashedPassword = await this.auth.hashPassword(user.password);
    user = {
      ...user,
      password: hashedPassword,
    };
    return this.userRepository.create(user);
  }

  @Get()
  findAll() {
    return this.userRepository.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRepository.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: CreateUserDto) {
    return this.userRepository.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRepository.remove(+id);
  }
}

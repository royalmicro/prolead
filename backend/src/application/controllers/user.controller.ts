import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from 'src/domain/services/user/user.service';
import { AuthService } from '../services/auth/auth.service';
import { CreateUserDto } from 'src/domain/model/user/user.dto';

import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly auth: AuthService,
  ) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    const hashedPassword = await this.auth.hashPassword(user.password);
    user = {
      ...user,
      password: hashedPassword,
    };
    return this.userService.create(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: CreateUserDto) {
    return this.userService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

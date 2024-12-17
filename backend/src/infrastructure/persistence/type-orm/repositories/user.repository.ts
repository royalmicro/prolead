import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';
import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { UserDto } from 'src/domain/model/user/user.dto';
import { UserSchema } from '../../orm/user.schema';
import { EventEmitter2 } from '@nestjs/event-emitter';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

@Injectable()
export class UserRepository
  extends BaseRepository<UserDto>
  implements UserRepositoryInterface<UserDto>
{
  constructor(
    @InjectRepository(UserSchema)
    protected readonly userRepository: Repository<UserDto>,
    protected readonly eventEmitter: EventEmitter2,
  ) {
    super(userRepository, eventEmitter);
  }

  getEntityName(): string {
    return 'User';
  }

  async findByEmail(email: string, relations?: string[]): Promise<UserDto> {
    return await this.userRepository.findOne({
      where: { email },
      relations,
    });
  }
}

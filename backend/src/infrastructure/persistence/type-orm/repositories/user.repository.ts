import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';
import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { UserDto } from 'src/domain/model/user/user.dto';
import { UserSchema } from '../../orm/user.schema';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

@Injectable()
export class UserRepository
  extends BaseRepository<UserDto>
  implements UserRepositoryInterface<UserDto>
{
  constructor(
    @InjectRepository(UserSchema)
    private readonly userRepository: Repository<UserDto>,
  ) {
    super(userRepository);
  }

  async findByEmail(email: string, relations?: string[]): Promise<UserDto> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations,
    });

    return this.toDto(user);
  }

  public toDto(userOrm?: UserDto): UserDto | null {
    if (!userOrm) {
      return null;
    }

    return {
      id: userOrm.id,
      name: userOrm.name,
      email: userOrm.email,
      password: userOrm.password,
      isActive: userOrm.isActive,
      createdAt: userOrm.createdAt,
      updatedAt: userOrm.updatedAt,
    };
  }
}

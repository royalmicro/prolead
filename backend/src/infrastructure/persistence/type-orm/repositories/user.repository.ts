import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';
import { UserOrm } from 'src/infrastructure/persistence/orm/user.orm';
import { Repository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { UserDto } from 'src/domain/model/user/user.dto';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

@Injectable()
export class UserRepository
  extends BaseRepository<UserOrm>
  implements UserRepositoryInterface<UserOrm>
{
  constructor(
    @InjectRepository(UserOrm)
    private readonly userRepository: Repository<UserOrm>,
  ) {
    super(userRepository);
  }

  async findByEmail(email: string, relations?: string[]): Promise<UserDto> {
    const user = (await this.userRepository.findOne({
      where: { email },
      relations,
    })) as UserOrm;

    return this.toDto(user);
  }

  public toDto(userOrm?: UserOrm): UserDto | null {
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

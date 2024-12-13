import { CreateUserDto, UpdateUserDto, UserDto } from './user.dto';
import { BaseRepositoryInterface } from '../repository.interface';

export interface UserRepositoryInterface<T>
  extends BaseRepositoryInterface<T, CreateUserDto, UpdateUserDto> {
  findByEmail(email: string, relations?: string[]): Promise<UserDto>;
}

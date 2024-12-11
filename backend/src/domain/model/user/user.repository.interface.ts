import { User } from 'src/infrastructure/persistence/orm/user.orm';
import { CreateUserDto } from './user.dto';

export interface UserRepositoryInterface {
  create(dto: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  update(id: number, dto: CreateUserDto): Promise<User>;
  remove(id: number): Promise<void>;
}

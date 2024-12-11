import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/domain/model/user/user.dto';
import { UserRepositoryInterface } from 'src/domain/model/user/user.repository.interface';
import { User } from 'src/infrastructure/persistence/orm/user.orm';
import { Repository } from 'typeorm';

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userdto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(userdto);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    return user;
  }

  async update(id: number, userDto: CreateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, userDto);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}

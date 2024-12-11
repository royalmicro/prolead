import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/infrastructure/persistence/orm/user.orm';
import { UserRepository } from 'src/infrastructure/persistence/type-orm/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserRepository,
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
  ],
  exports: ['UserRepositoryInterface'],
})
export class DomainModule {}

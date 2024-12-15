import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenceSchema } from 'src/infrastructure/persistence/orm/licence.schema';
import { UserSchema } from 'src/infrastructure/persistence/orm/user.schema';
import { LicenceRepository } from 'src/infrastructure/persistence/type-orm/repositories/licence.repository';
import { UserRepository } from 'src/infrastructure/persistence/type-orm/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema, LicenceSchema])],
  providers: [
    UserRepository,
    LicenceRepository,
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
    {
      provide: 'LicenceRepositoryInterface',
      useClass: LicenceRepository,
    },
  ],
  exports: ['UserRepositoryInterface', 'LicenceRepositoryInterface'],
})
export class DomainModule {}

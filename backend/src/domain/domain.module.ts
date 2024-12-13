import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenceOrm } from 'src/infrastructure/persistence/orm/licence.orm';
import { UserOrm } from 'src/infrastructure/persistence/orm/user.orm';
import { LicenceRepository } from 'src/infrastructure/persistence/type-orm/repositories/licence.repository';
import { UserRepository } from 'src/infrastructure/persistence/type-orm/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrm, LicenceOrm])],
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

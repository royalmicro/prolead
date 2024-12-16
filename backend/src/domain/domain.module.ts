import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenceSchema } from 'src/infrastructure/persistence/orm/licence.schema';
import { PortalSchema } from 'src/infrastructure/persistence/orm/portal.schema';
import { UserSchema } from 'src/infrastructure/persistence/orm/user.schema';
import { LicenceRepository } from 'src/infrastructure/persistence/type-orm/repositories/licence.repository';
import { PortalRepository } from 'src/infrastructure/persistence/type-orm/repositories/portal.repository';
import { UserRepository } from 'src/infrastructure/persistence/type-orm/repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserSchema, LicenceSchema, PortalSchema]),
  ],
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
    {
      provide: 'PortalRepositoryInterface',
      useClass: PortalRepository,
    },
  ],
  exports: [
    'UserRepositoryInterface',
    'LicenceRepositoryInterface',
    'PortalRepositoryInterface',
  ],
})
export class DomainModule {}

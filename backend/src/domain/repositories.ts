import { LicenceRepository } from 'src/infrastructure/persistence/type-orm/repositories/licence.repository';
import { PortalRepository } from 'src/infrastructure/persistence/type-orm/repositories/portal.repository';
import { ServiceCategoryRepository } from 'src/infrastructure/persistence/type-orm/repositories/service-category.repository';
import { ServiceRepository } from 'src/infrastructure/persistence/type-orm/repositories/service.repository';
import { UserRepository } from 'src/infrastructure/persistence/type-orm/repositories/user.repository';

export const repositoryProviders = [
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
  {
    provide: 'ServiceRepositoryInterface',
    useClass: ServiceRepository,
  },
  {
    provide: 'ServiceCategoryRepositoryInterface',
    useClass: ServiceCategoryRepository,
  },
];

export const repositoryExports = [
  'UserRepositoryInterface',
  'LicenceRepositoryInterface',
  'PortalRepositoryInterface',
  'ServiceRepositoryInterface',
  'ServiceCategoryRepositoryInterface',
];

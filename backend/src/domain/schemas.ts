import { LicenceSchema } from 'src/infrastructure/persistence/orm/licence.schema';
import { PortalSchema } from 'src/infrastructure/persistence/orm/portal.schema';
import { ServiceCategorySchema } from 'src/infrastructure/persistence/orm/service-category.schema';
import { ServiceSchema } from 'src/infrastructure/persistence/orm/service.schema';
import { UserSchema } from 'src/infrastructure/persistence/orm/user.schema';

export const schemas = [
  UserSchema,
  LicenceSchema,
  PortalSchema,
  ServiceSchema,
  ServiceCategorySchema,
];

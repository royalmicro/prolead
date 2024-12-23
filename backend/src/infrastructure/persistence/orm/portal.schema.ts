import { UserInterface } from 'src/domain/model/user/user.interface';
import { EntitySchema } from 'typeorm';
import { LicenceInterface } from './licence.schema';
import { ServiceInterface } from './service.schema';

export interface PortalInterface {
  id: number;
  name: string;
  description?: string;
  users: UserInterface[];
  licences: LicenceInterface[];
  services: ServiceInterface[];
  createdAt: Date;
  updatedAt: Date;
}

export const PortalSchema = new EntitySchema<PortalInterface>({
  name: 'Portal',
  tableName: 'portals',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    name: {
      type: 'varchar',
    },
    description: {
      type: 'varchar',
      nullable: true,
    },
    createdAt: {
      type: 'timestamp',
      createDate: true,
    },
    updatedAt: {
      type: 'timestamp',
      updateDate: true,
    },
  },
  relations: {
    users: {
      type: 'one-to-many',
      target: 'User',
      inverseSide: 'portal',
      cascade: true,
    },
    licences: {
      type: 'one-to-many',
      target: 'Licence',
      inverseSide: 'portal',
    },
    services: {
      type: 'one-to-many',
      target: 'Service',
      inverseSide: 'portal',
    },
  },
});

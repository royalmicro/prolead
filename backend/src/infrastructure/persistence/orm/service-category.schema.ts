import { EntitySchema } from 'typeorm';
import { ServiceInterface } from './service.schema';
import { PortalInterface } from './portal.schema';

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  portal: PortalInterface;
  services?: ServiceInterface[];
}

export const ServiceCategorySchema = new EntitySchema<ServiceCategory>({
  name: 'ServiceCategory',
  tableName: 'service_categories',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    name: {
      type: 'varchar',
      length: 255,
      nullable: false,
      unique: true,
    },
    description: {
      type: 'text',
      nullable: true,
    },
    color: {
      type: 'varchar',
      length: 7,
      nullable: false,
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
    services: {
      type: 'one-to-many',
      target: 'Service',
      inverseSide: 'service_categories',
    },
    portal: {
      type: 'many-to-one',
      target: 'Portal',
      joinColumn: { name: 'portal_id' },
      nullable: false,
    },
  },
});

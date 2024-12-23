import { EntitySchema } from 'typeorm';
import { Portal } from 'src/domain/model/portal/portal';
import { Price } from 'src/domain/model/service/price.vo';
import { ServiceCategory } from './service-category.schema';

export interface ServiceInterface {
  id: number;
  name: string;
  description?: string;
  price: Price;
  reference: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  category: ServiceCategory;
  portal: Portal;
}

export const ServiceSchema = new EntitySchema<ServiceInterface>({
  name: 'Service',
  tableName: 'services',
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
    },
    description: {
      type: 'text',
      nullable: true,
    },
    price: {
      type: 'simple-json',
      nullable: false,
      transformer: {
        to(value: Price) {
          return value.toJSON();
        },
        from(value: any) {
          return Price.fromJSON(value);
        },
      },
    },
    reference: {
      type: 'varchar',
      length: 50,
      nullable: false,
      unique: true,
    },
    isActive: {
      type: 'boolean',
      default: true,
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
    category: {
      type: 'many-to-one',
      target: 'ServiceCategory',
      nullable: false,
      eager: true,
      joinColumn: { name: 'category_id' },
    },
    portal: {
      type: 'many-to-one',
      target: 'Portal',
      nullable: false,
      eager: true,
      joinColumn: { name: 'portal_id' },
    },
  },
});

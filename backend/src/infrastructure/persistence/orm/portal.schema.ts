import { UserInterface } from 'src/domain/model/user/user.interface';
import { EntitySchema } from 'typeorm';
import { LicenceInterface } from './licence.schema';

export interface Portal {
  id: string;
  name: string;
  description?: string;
  owner: UserInterface;
  users: UserInterface[];
  licences: LicenceInterface[];
  createdAt: Date;
  updatedAt: Date;
}

export const PortalSchema = new EntitySchema<Portal>({
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
    owner: {
      type: 'one-to-one',
      target: 'User',
      inverseSide: 'ownedPortal',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
      cascade: true,
    },
    users: {
      type: 'many-to-many',
      target: 'User',
      inverseSide: 'portals',
    },
    licences: {
      type: 'one-to-many',
      target: 'Licence',
      inverseSide: 'portal',
    },
  },
});

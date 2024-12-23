import { EntitySchema } from 'typeorm';
import { Portal } from 'src/domain/model/portal/portal';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  portal: Portal;
}

export const UserSchema = new EntitySchema<UserInterface>({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    name: {
      type: String,
      length: 100,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
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
    portal: {
      type: 'many-to-one',
      target: 'Portal',
      inverseSide: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
  },
});

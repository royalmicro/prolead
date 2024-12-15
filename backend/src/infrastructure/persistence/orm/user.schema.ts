import { UserInterface } from 'src/domain/model/user/user.interface';
import { EntitySchema } from 'typeorm';

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
    licence: {
      type: 'many-to-one',
      target: 'Licence',
      joinColumn: {
        name: 'licenceId',
      },
    },
  },
});

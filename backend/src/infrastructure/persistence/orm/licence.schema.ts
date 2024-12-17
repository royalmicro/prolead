import { UserInterface } from 'src/domain/model/user/user.interface';
import { EntitySchema } from 'typeorm';

export interface LicenceInterface {
  id: number;
  type: 'BASIC' | 'PREMIUM';
  users: UserInterface[];
}

export const LicenceSchema = new EntitySchema<LicenceInterface>({
  name: 'Licence',
  tableName: 'licences',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    type: {
      type: 'enum',
      enum: ['BASIC', 'PREMIUM'],
    },
  },
});

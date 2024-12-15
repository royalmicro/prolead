import { LicenceInterface } from 'src/domain/model/licence/licence.interface';
import { EntitySchema } from 'typeorm';

export const LicenceSchema = new EntitySchema<LicenceInterface>({
  name: 'Licence',
  tableName: 'licences',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    type: {
      type: 'enum',
      enum: ['BASIC', 'PREMIUM'],
    },
  },
  relations: {
    users: {
      type: 'one-to-many',
      target: 'User',
      inverseSide: 'licence',
    },
  },
});

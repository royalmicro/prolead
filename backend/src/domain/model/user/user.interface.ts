import { LicenceInterface } from 'src/infrastructure/persistence/orm/licence.schema';

export interface UserInterface {
  id: number;

  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  licence: LicenceInterface;
}

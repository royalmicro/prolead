import { LicenceInterface } from '../licence/licence.interface';

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

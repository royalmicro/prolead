import { UserInterface } from '../user/user.interface';

export interface LicenceInterface {
  id: number;
  type: 'BASIC' | 'PREMIUM';
  users: UserInterface[];
}

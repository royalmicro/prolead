import { User } from '../user/user';

export class Licence {
  constructor(
    private readonly id: string,
    private readonly user: User,
    private readonly portalId: string,
    private readonly type: LicenceType = LicenceType.BASIC,
  ) {}
}

export enum LicenceType {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
}

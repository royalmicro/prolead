import { User } from '../user/user';

export class Licence {
  private id: number;
  private users: User[];
  private type: LicenceType;

  constructor() {}

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getUsers(): User[] {
    return this.users;
  }

  public setUsers(users: User[]): void {
    this.users = users;
  }

  public getType(): LicenceType {
    return this.type;
  }

  public setType(type: LicenceType): void {
    this.type = type;
  }
}

export enum LicenceType {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
}

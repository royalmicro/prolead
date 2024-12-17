export class Portal {
  public id: number;

  public name: string;
  public ownerId: string;
  public description?: string;

  public userIds: string[] = [];
  public serviceIds: string[] = [];
  public licenseIds: string[] = [];
  public readonly createdAt: Date = new Date();
  public readonly updatedAt: Date = new Date();

  constructor() {}

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getOwnerId(): string {
    return this.ownerId;
  }

  public setOwnerId(ownerId: string): void {
    this.ownerId = ownerId;
  }
}

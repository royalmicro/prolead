export class Portal {
  constructor(
    public readonly id: number,
    public name: string,
    public ownerId: string,
    public description?: string,
    public userIds: string[] = [],
    public serviceIds: string[] = [],
    public licenseIds: string[] = [],
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date(),
  ) {}
}

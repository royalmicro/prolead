export class EntityDomainEvent<TPayload = any> {
  constructor(
    public readonly entityType: string,
    public readonly action: string,
    public readonly payload: TPayload,
  ) {}
}

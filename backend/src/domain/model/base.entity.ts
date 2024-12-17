import { EntityDomainEvent } from '../events/entity-domain-event';

export abstract class BaseEntity {
  private domainEvents: EntityDomainEvent[] = [];

  protected addDomainEvent(event: EntityDomainEvent): void {
    this.domainEvents.push(event);
  }

  public getDomainEvents(): EntityDomainEvent[] {
    return this.domainEvents;
  }

  public clearDomainEvents(): void {
    this.domainEvents = [];
  }
}

import { AggregateRoot } from '@nestjs/cqrs';

export class ServiceCategory extends AggregateRoot {
  private id: string;
  private name: string;
  private description?: string;

  constructor(id: string, name: string, description?: string) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string | undefined {
    return this.description;
  }
}

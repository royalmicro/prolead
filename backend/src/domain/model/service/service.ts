import { AggregateRoot } from '@nestjs/cqrs'; // Optional for CQRS
import { Price } from './price.vo';
import { ServiceCategory } from '../service-category/service-category';
import { Portal } from '../portal/portal';

export class Service extends AggregateRoot {
  private id: string;
  private name: string;
  private price: Price;
  private isActive: boolean;
  private category: ServiceCategory;
  private portal: Portal;

  private description?: string;
  private reference: string;

  constructor(
    id: string,
    name: string,
    price: Price,
    isActive: boolean,
    category: ServiceCategory,
    portal: Portal,
    description?: string,
    reference?: string,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
    this.category = category;
    this.portal = portal;
    this.description = description;
    this.reference = reference;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): Price {
    return this.price;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  getCategory(): ServiceCategory {
    return this.category;
  }

  getPortal(): Portal {
    return this.portal;
  }

  getDescription(): string | undefined {
    return this.description;
  }

  getReference(): string | undefined {
    return this.reference;
  }
}

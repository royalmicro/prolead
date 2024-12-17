import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Repository, DeepPartial, FindOptionsWhere } from 'typeorm';

@Injectable()
export abstract class BaseRepository<T extends { id: number }> {
  constructor(
    protected readonly repository: Repository<T>,
    protected readonly eventEmitter: EventEmitter2,
  ) {}

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    const savedEntity = await this.repository.save(entity);

    this.emitEvent('created', savedEntity);

    return savedEntity;
  }

  async findAll(
    relations: string[] = [],
    loadRelationIds: boolean = false,
  ): Promise<T[]> {
    if (loadRelationIds) {
      return this.repository.find({
        loadRelationIds: true,
      });
    }

    return this.repository.find({ relations });
  }

  async findOne(id: number, relations: string[] = []): Promise<T> {
    const entity = await this.repository.findOne({
      where: { id } as FindOptionsWhere<T>,
      relations,
    });
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    return entity;
  }

  async update(id: number, data: DeepPartial<T>): Promise<T> {
    const entity = await this.findOne(id);
    Object.assign(entity, data);
    const updatedEntity = await this.repository.save(entity);

    this.emitEvent('updated', updatedEntity);

    return updatedEntity;
  }

  async delete(id: number): Promise<void> {
    const entity = await this.findOne(id);
    await this.repository.remove(entity);

    this.emitEvent('deleted', id as any);
  }

  /**
   * Emits a CRUD event.
   * @param action The action performed (e.g., 'created', 'updated', 'deleted').
   * @param payload The data associated with the event.
   */
  private emitEvent(action: string, payload: T | Partial<T>) {
    const eventName = `${this.getEntityName()}.${action}`;
    this.eventEmitter.emit(eventName, {
      entity: this.getEntityName(),
      action,
      payload,
    });
  }

  abstract getEntityName(): string;
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, DeepPartial, FindOptionsWhere } from 'typeorm';

@Injectable()
export abstract class BaseRepository<T extends { id: number }> {
  constructor(private readonly repository: Repository<T>) {}

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
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
    return this.repository.save(entity);
  }

  async delete(id: number): Promise<void> {
    const entity = await this.findOne(id);
    await this.repository.remove(entity);
  }
}

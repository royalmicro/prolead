import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { BaseRepository } from '../base.repository';
import { ServiceSchema } from '../../orm/service.schema';
import { ServiceDto } from 'src/domain/model/service/service.dto';
import { ServiceRepositoryInterface } from 'src/domain/model/service/service.repository.interface';

@Injectable()
export class ServiceRepository
  extends BaseRepository<ServiceDto>
  implements ServiceRepositoryInterface<ServiceDto>
{
  getEntityName(): string {
    return 'Service';
  }

  constructor(
    @InjectRepository(ServiceSchema)
    protected readonly serviceRepository: Repository<ServiceDto>,
    protected readonly eventEmitter: EventEmitter2,
  ) {
    super(serviceRepository, eventEmitter);
  }

  async findByPortal(portalId: number): Promise<ServiceDto[]> {
    return await this.serviceRepository.find({
      where: { portal: { id: portalId } },
      relations: ['category', 'portal'],
    });
  }

  async findByCategoryId(categoryId: number): Promise<ServiceDto[]> {
    return await this.serviceRepository.find({
      where: { category: { id: categoryId } },
      relations: ['category', 'portal'],
    });
  }
}

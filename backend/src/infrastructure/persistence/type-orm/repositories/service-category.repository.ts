import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { BaseRepository } from '../base.repository';
import { ServiceCategoryRepositoryInterface } from 'src/domain/model/service-category/service-category.repository.interface';
import { ServiceCategorySchema } from '../../orm/service-category.schema';
import { ServiceCategoryDto } from 'src/domain/model/service-category/service-category.dto';

@Injectable()
export class ServiceCategoryRepository
  extends BaseRepository<ServiceCategoryDto>
  implements ServiceCategoryRepositoryInterface<ServiceCategoryDto>
{
  getEntityName(): string {
    return 'ServiceCategory';
  }

  constructor(
    @InjectRepository(ServiceCategorySchema)
    protected readonly serviceCategoryRepository: Repository<ServiceCategoryDto>,
    protected readonly eventEmitter: EventEmitter2,
  ) {
    super(serviceCategoryRepository, eventEmitter);
  }

  async findByPortal(portalId: number): Promise<ServiceCategoryDto[]> {
    return await this.serviceCategoryRepository.find({
      where: { portal: { id: portalId } },
      relations: ['services', 'portal'],
    });
  }
}

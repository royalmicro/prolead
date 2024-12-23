import { BaseRepositoryInterface } from '../repository.interface';
import { CreateServiceDto, ServiceDto, UpdateServiceDto } from './service.dto';

export interface ServiceRepositoryInterface<T>
  extends BaseRepositoryInterface<T, CreateServiceDto, UpdateServiceDto> {
  getEntityName(): string;
  findByCategoryId(categoryId: number): Promise<ServiceDto[]>;
}

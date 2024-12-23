import { BaseRepositoryInterface } from '../repository.interface';
import {
  CreateServiceCategoryDto,
  UpdateServiceCategoryDto,
} from './service-category.dto';

export interface ServiceCategoryRepositoryInterface<T>
  extends BaseRepositoryInterface<
    T,
    CreateServiceCategoryDto,
    UpdateServiceCategoryDto
  > {
  getEntityName(): string;
}

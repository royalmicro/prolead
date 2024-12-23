import {
  CreateServiceCategoryDto,
  ServiceCategoryDto,
  UpdateServiceCategoryDto,
} from 'src/domain/model/service-category/service-category.dto';
import { BaseController } from './base.controller';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Inject } from '@nestjs/common';
import { ServiceCategoryRepositoryInterface } from 'src/domain/model/service-category/service-category.repository.interface';

@ApiBearerAuth()
@Controller('service-categories')
export class ServiceCategoryController extends BaseController<
  ServiceCategoryDto,
  CreateServiceCategoryDto,
  UpdateServiceCategoryDto
> {
  constructor(
    @Inject('ServiceCategoryRepositoryInterface')
    private readonly serviceCategoryRepository: ServiceCategoryRepositoryInterface<ServiceCategoryDto>,
  ) {
    super(serviceCategoryRepository, ['portal', 'services']);
  }
}

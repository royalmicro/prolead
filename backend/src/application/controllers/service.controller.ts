import {
  CreateServiceDto,
  ServiceDto,
  UpdateServiceDto,
} from 'src/domain/model/service/service.dto';
import { BaseController } from './base.controller';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Controller, Inject, Post } from '@nestjs/common';
import { ServiceRepositoryInterface } from 'src/domain/model/service/service.repository.interface';

@ApiBearerAuth()
@Controller('services')
export class ServiceController extends BaseController<
  ServiceDto,
  CreateServiceDto,
  UpdateServiceDto
> {
  constructor(
    @Inject('ServiceRepositoryInterface')
    private readonly serviceRepository: ServiceRepositoryInterface<ServiceDto>,
  ) {
    super(serviceRepository, ['category', 'portal']);
  }

  @ApiBody({ type: CreateServiceDto })
  @Post()
  create(createDto: CreateServiceDto): Promise<ServiceDto> {
    return super.create(createDto);
  }
}

import { Type } from 'class-transformer';
import { Price } from './price.vo';
import { PortalDto } from '../portal/portal.dto';
import { ServiceCategoryDto } from '../service-category/service-category.dto';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class ServiceDto {
  id: number;
  name: string;

  @ApiProperty({
    description: 'The price details of the service',
    example: { currency: 'USD', value: 100 },
  })
  @Type(() => Price)
  price: Price;
  isActive: boolean;
  category: ServiceCategoryDto | number | null;
  portal: PortalDto | number | null;
  description?: string;
  reference?: string;
}

export class CreateServiceDto extends PartialType(
  OmitType(ServiceDto, ['id'] as const),
) {}

export class UpdateServiceDto extends PartialType(
  OmitType(ServiceDto, ['id'] as const),
) {}

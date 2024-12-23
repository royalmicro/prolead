import { OmitType, PartialType } from '@nestjs/swagger';
import { PortalDto } from '../portal/portal.dto';
import { ServiceDto } from '../service/service.dto';

export class ServiceCategoryDto {
  id: number;
  name: string;
  color: string;
  description?: string;
  portal: PortalDto;
  services?: ServiceDto[];
}

export class CreateServiceCategoryDto extends PartialType(
  OmitType(ServiceCategoryDto, ['id'] as const),
) {}

export class UpdateServiceCategoryDto extends PartialType(
  OmitType(ServiceCategoryDto, ['id'] as const),
) {}

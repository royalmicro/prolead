import { OmitType, PartialType } from '@nestjs/swagger';
import { LicenceDto } from '../licence/licence.dto';

export class PortalDto {
  id: number;
  name: string;
  description?: string;
  licence: LicenceDto;
  createdAt: Date;
  updatedAt: Date;

  constructor() {}
}

export class CreatePortalDto extends PartialType(
  OmitType(PortalDto, ['id'] as const),
) {}

export class UpdatePortalDto extends PartialType(
  OmitType(PortalDto, ['id'] as const),
) {}

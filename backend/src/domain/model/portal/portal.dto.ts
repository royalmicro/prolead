import { OmitType, PartialType } from '@nestjs/swagger';
import { LicenceDto } from '../licence/licence.dto';
import { UserDto } from '../user/user.dto';

export class PortalDto {
  id: number;
  name: string;
  description?: string;
  ownerId: number;
  userIds: number[];
  serviceIds: string[];
  owner: UserDto;
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

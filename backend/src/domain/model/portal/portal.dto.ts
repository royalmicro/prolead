import { OmitType, PartialType } from '@nestjs/swagger';
import { Portal } from './portal';

export class PortalDto {
  id: number;
  name: string;
  description?: string;
  ownerId: string;
  userIds: string[];
  serviceIds: string[];
  licenseIds: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(portal: Portal) {
    this.id = portal.id;
    this.name = portal.name;
    this.description = portal.description;
    this.ownerId = portal.ownerId;
    this.userIds = portal.userIds;
    this.serviceIds = portal.serviceIds;
    this.licenseIds = portal.licenseIds;
    this.createdAt = portal.createdAt;
    this.updatedAt = portal.updatedAt;
  }
}

export class CreatePortalDto extends PartialType(
  OmitType(PortalDto, ['id'] as const),
) {}

export class UpdatePortalDto extends PartialType(
  OmitType(PortalDto, ['id'] as const),
) {}

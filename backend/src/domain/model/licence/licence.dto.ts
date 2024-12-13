import { OmitType, PartialType } from '@nestjs/swagger';
import { LicenceType } from './licence';

export class LicenceDto {
  id: number;
  type: LicenceType = LicenceType.BASIC;
}

export class CreateLicenceDto extends PartialType(
  OmitType(LicenceDto, ['id'] as const),
) {}

export class UpdateLicenceDto extends PartialType(
  OmitType(LicenceDto, ['id'] as const),
) {}

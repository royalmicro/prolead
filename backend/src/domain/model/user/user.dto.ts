import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { PortalDto } from '../portal/portal.dto';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  portal?: PortalDto | number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateUserDto extends PartialType(
  OmitType(UserDto, ['id', 'portal'] as const),
) {
  portal?: number | PortalDto;
}

export class UpdateUserDto extends PartialType(
  OmitType(UserDto, ['id', 'portal'] as const),
) {
  portal?: number | PortalDto;
}

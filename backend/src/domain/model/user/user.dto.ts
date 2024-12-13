import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { LicenceDto } from '../licence/licence.dto';

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

  licence?: LicenceDto;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateUserDto extends PartialType(
  OmitType(UserDto, ['id'] as const),
) {}

export class UpdateUserDto extends PartialType(
  OmitType(UserDto, ['id'] as const),
) {}

import {
  IsString,
  IsOptional,
  IsEmail,
  IsEnum,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum, AccountStatusEnum } from 'src/types/enums';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ example: 'johndoe@example.com', description: 'User email' })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @ApiProperty({ example: 'password123', description: 'User password' })
  password: string;

  @IsString()
  @ApiProperty({ example: 'johndoe', description: 'User username' })
  username: string;

  @IsString()
  @ApiProperty({ example: '123-456-7890', description: 'User phone number' })
  phoneNumber: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'https://example.com/avatar.jpg',
    description: 'User avatar URL (optional)',
    required: false,
  })
  avatar?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'This is a bio',
    description: 'User bio (optional)',
    required: false,
  })
  bio?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '1990-01-01',
    description: 'User birthday (optional)',
    required: false,
  })
  birthday?: string; // Consider using a Date format or a custom validation for date format

  @IsEnum(RoleEnum)
  @IsOptional()
  @ApiProperty({
    enum: RoleEnum,
    example: RoleEnum.USER,
    description: 'User role (optional)',
    required: false,
  })
  role?: RoleEnum;

  @IsEnum(AccountStatusEnum)
  @IsOptional()
  @ApiProperty({
    enum: AccountStatusEnum,
    example: AccountStatusEnum.ACTIVE,
    description: 'User status (optional)',
    required: false,
  })
  status?: AccountStatusEnum;
}

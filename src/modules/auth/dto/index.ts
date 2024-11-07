import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'dovanhuyabcd@gmail.com',
    description: 'email',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'HuyDV',
    description: 'name',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'password',
    description: 'password',
  })
  password: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: 'dovanhuyabcd@gmail.com',
    description: 'email',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'password',
    description: 'password',
  })
  password: string;
}

export class CreateTokenDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class RefreshTokenBodyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'refreshToken',
    description: 'refreshToken',
  })
  refreshToken: string;
}

import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @IsString()
  @ApiProperty({ example: 'device_123', description: 'Device ID' })
  deviceId: string;

  @IsString()
  @ApiProperty({ example: 'token_abc', description: 'Device token' })
  token: string;
}

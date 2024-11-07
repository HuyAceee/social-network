import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMerchantDto {
  @IsString()
  @ApiProperty({ example: 'US', description: 'Country code' })
  countryCode: string;

  @IsString()
  @ApiProperty({ example: 'My Awesome Store', description: 'Merchant name' })
  merchantName: string;

  @IsString()
  @ApiProperty({
    example: '123 Main St, Anytown, CA 12345',
    description: 'Merchant address',
  })
  address: string;

  @IsString()
  @ApiProperty({
    example: 'https://www.mystore.com',
    description: 'Merchant website URL',
  })
  websiteUrl: string;

  @IsString()
  @ApiProperty({
    example: '123-456-7890',
    description: 'Merchant phone number',
  })
  phoneNumber: string;

  @IsString()
  @ApiProperty({ example: 'store@example.com', description: 'Merchant email' })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'https://example.com/logo.png',
    description: 'Merchant logo URL (optional)',
    required: false,
  })
  logoUrl?: string;
}

import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @ApiProperty({ example: 'iPhone 15', description: 'Product name' })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'The latest iPhone model',
    description: 'Product description',
  })
  description: string;

  @IsString()
  @ApiProperty({ example: 'Apple', description: 'Product brand' })
  brand: string;

  @IsNumber()
  @ApiProperty({ example: 150, description: 'Product weight in grams' })
  weight: number;

  @IsString()
  @ApiProperty({ example: '10 x 8 x 2 cm', description: 'Product dimensions' })
  dimensions: string;

  @IsNumber()
  @ApiProperty({ example: 4.8, description: 'Product rating' })
  rating: number;

  @IsNumber()
  @ApiProperty({ example: 20, description: 'Product sale percentage' })
  sale: number;

  @IsNumber()
  @ApiProperty({ example: 999, description: 'Product price' })
  price: number;

  @IsString()
  @ApiProperty({
    example: '2024-12-31',
    description: 'Product sale expiration date',
  })
  saleExpireAt: string; // Consider using a Date format or a custom validation for date format

  @IsNumber()
  @ApiProperty({ example: 100, description: 'Product quantity' })
  quantity: number;

  @IsNumber()
  @ApiProperty({ example: 50, description: 'Product sold quantity' })
  soldQuantity: number;

  @IsString()
  @ApiProperty({ example: 'category_id', description: 'Product category ID' })
  categoryId: string;

  @IsString()
  @ApiProperty({ example: 'merchant_id', description: 'Merchant ID' })
  merchantId: string;
}

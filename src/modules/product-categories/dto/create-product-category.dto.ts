import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCategoryDto {
  @IsString()
  @ApiProperty({ example: 'Electronics', description: 'Product category name' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Electronics category description',
    description: 'Product category description (optional)',
    required: false,
  })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'parent_category_id',
    description: 'Parent category ID (optional)',
    required: false,
  })
  parentId?: string;
}

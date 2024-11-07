import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProductVariationEnum } from 'src/types/enums';

export class CreateProductVariantDto {
  @IsEnum(ProductVariationEnum)
  @ApiProperty({
    enum: ProductVariationEnum,
    example: ProductVariationEnum.COLOR,
    description: 'Variant type (COLOR or SIZE)',
  })
  type: ProductVariationEnum;

  @IsString()
  @ApiProperty({ example: 'Red', description: 'Variant value' })
  value: string;
}

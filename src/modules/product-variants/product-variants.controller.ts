import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { ProductVariant } from './entities/product-variant.entity';
import { ProductVariantService } from './product-variants.service';

@ApiTags('ProductVariants')
@Controller('product-variants')
export class ProductVariantController {
  constructor(private productVariantService: ProductVariantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product variant' })
  @ApiResponse({
    status: 201,
    description: 'Product variant created successfully',
  })
  async createProductVariant(
    @Body() createProductVariantDto: CreateProductVariantDto,
  ): Promise<ProductVariant> {
    return this.productVariantService.createProductVariant(
      createProductVariantDto,
    );
  }

  @Get('product/:productId')
  @ApiOperation({ summary: 'Get product variants by product ID' })
  @ApiResponse({
    status: 200,
    description: 'Product variants retrieved successfully',
  })
  async getProductVariantsByProductId(
    @Param('productId') productId: number,
  ): Promise<ProductVariant[]> {
    return this.productVariantService.getProductVariantsByProductId(productId);
  }
}

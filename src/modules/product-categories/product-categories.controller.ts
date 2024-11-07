import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductCategory } from './entities/product-category.entity';
import { ProductCategoryService } from './product-categories.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';

@ApiTags('ProductCategories')
@Controller('product-categories')
export class ProductCategoryController {
  constructor(private productCategoryService: ProductCategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product category' })
  @ApiResponse({
    status: 201,
    description: 'Product category created successfully',
  })
  async createProductCategory(
    @Body() createProductCategoryDto: CreateProductCategoryDto,
  ): Promise<ProductCategory> {
    return this.productCategoryService.createProductCategory(
      createProductCategoryDto,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product category by ID' })
  @ApiResponse({
    status: 200,
    description: 'Product category retrieved successfully',
  })
  async getProductCategoryById(
    @Param('id') id: number,
  ): Promise<ProductCategory | undefined> {
    return this.productCategoryService.getProductCategoryById(id);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get product categories by user ID' })
  @ApiResponse({
    status: 200,
    description: 'Product categories retrieved successfully',
  })
  async getProductCategoriesByUserId(
    @Param('userId') userId: number,
  ): Promise<ProductCategory[]> {
    return this.productCategoryService.getProductCategoriesByUserId(userId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product category' })
  @ApiResponse({
    status: 200,
    description: 'Product category updated successfully',
  })
  async updateProductCategory(
    @Param('id') id: number,
    @Body() updateProductCategoryDto: UpdateProductCategoryDto,
  ): Promise<ProductCategory> {
    return this.productCategoryService.updateProductCategory(
      id,
      updateProductCategoryDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product category' })
  @ApiResponse({
    status: 200,
    description: 'Product category deleted successfully',
  })
  async deleteProductCategory(@Param('id') id: number): Promise<void> {
    return this.productCategoryService.deleteProductCategory(id);
  }
}

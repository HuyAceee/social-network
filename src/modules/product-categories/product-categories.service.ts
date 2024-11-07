import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategory } from './entities/product-category.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async createProductCategory(
    createProductCategoryDto: CreateProductCategoryDto,
  ): Promise<ProductCategory> {
    const productCategory = this.productCategoryRepository.create(
      createProductCategoryDto,
    );
    return await this.productCategoryRepository.save(productCategory);
  }

  async updateProductCategory(
    id: number,
    updateProductCategoryDto: UpdateProductCategoryDto,
  ): Promise<ProductCategory> {
    const productCategory = await this.productCategoryRepository.findOneBy({
      id,
    });
    if (!productCategory) {
      throw new NotFoundException('Product category not found');
    }
    Object.assign(productCategory, updateProductCategoryDto);
    return await this.productCategoryRepository.save(productCategory);
  }

  async deleteProductCategory(id: number): Promise<void> {
    const result = await this.productCategoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Product category not found');
    }
  }

  async getProductCategoryById(
    id: number,
  ): Promise<ProductCategory | undefined> {
    return await this.productCategoryRepository.findOneBy({ id });
  }

  async getAllProductCategories(): Promise<ProductCategory[]> {
    return await this.productCategoryRepository.find();
  }

  async getProductCategoriesByUserId(
    userId: number,
  ): Promise<ProductCategory[]> {
    return await this.productCategoryRepository.find({
      where: { user: { id: userId } },
    });
  }
}

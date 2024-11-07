import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductVariantDto } from './dto/create-product-variant.dto';
import { ProductVariant } from './entities/product-variant.entity';

@Injectable()
export class ProductVariantService {
  constructor(
    @InjectRepository(ProductVariant)
    private productVariantRepository: Repository<ProductVariant>,
  ) {}

  async createProductVariant(
    createProductVariantDto: CreateProductVariantDto,
  ): Promise<ProductVariant> {
    const productVariant = this.productVariantRepository.create(
      createProductVariantDto,
    );
    return await this.productVariantRepository.save(productVariant);
  }

  async getProductVariantsByProductId(
    productId: number,
  ): Promise<ProductVariant[]> {
    return await this.productVariantRepository.find({
      where: { product: { id: productId } },
    });
  }
}

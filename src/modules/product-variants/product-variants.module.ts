import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVariant } from './entities/product-variant.entity';
import { ProductVariantController } from './product-variants.controller';
import { ProductVariantService } from './product-variants.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVariant])],
  providers: [ProductVariantService],
  controllers: [ProductVariantController],
  exports: [ProductVariantService],
})
export class ProductVariantModule {}

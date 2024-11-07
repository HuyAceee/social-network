import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemVariant } from './entities/order-item-variant.entity';
import { OrderItemVariantController } from './order-item-variants.controller';
import { OrderItemVariantService } from './order-item-variants.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItemVariant])],
  providers: [OrderItemVariantService],
  controllers: [OrderItemVariantController],
  exports: [OrderItemVariantService],
})
export class OrderItemVariantModule {}

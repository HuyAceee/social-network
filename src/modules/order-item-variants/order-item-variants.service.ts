import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItemVariant } from './entities/order-item-variant.entity';

@Injectable()
export class OrderItemVariantService {
  constructor(
    @InjectRepository(OrderItemVariant)
    private orderItemVariantRepository: Repository<OrderItemVariant>,
  ) {}

  async createOrderItemVariant(
    orderItemVariant: OrderItemVariant,
  ): Promise<OrderItemVariant> {
    return await this.orderItemVariantRepository.save(orderItemVariant);
  }

  async getOrderItemVariantsByOrderItemId(
    orderItemId: number,
  ): Promise<OrderItemVariant[]> {
    return await this.orderItemVariantRepository.find({
      where: { orderItem: { id: orderItemId } },
    });
  }
}

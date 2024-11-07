import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { OrderItem } from './entities/order-item.entity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
  ) {}

  async createOrderItem(
    createOrderItemDto: CreateOrderItemDto,
  ): Promise<OrderItem> {
    const orderItem = this.orderItemRepository.create(createOrderItemDto);
    return await this.orderItemRepository.save(orderItem);
  }

  async getOrderItemsByOrderId(orderId: number): Promise<OrderItem[]> {
    return await this.orderItemRepository.find({
      where: { order: { id: orderId } },
    });
  }
}

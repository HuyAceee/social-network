import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(order);
  }

  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return await this.orderRepository.find({ where: { user: { id: userId } } });
  }

  async getOrderById(orderId: number): Promise<Order | undefined> {
    return await this.orderRepository.findOneBy({ id: orderId });
  }
}

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemService } from './order-items.service';

@ApiTags('OrderItems')
@Controller('order-items')
export class OrderItemController {
  constructor(private orderItemService: OrderItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order item' })
  @ApiResponse({ status: 201, description: 'OrderItem created successfully' })
  async createOrderItem(
    @Body() createOrderItemDto: CreateOrderItemDto,
  ): Promise<OrderItem> {
    return this.orderItemService.createOrderItem(createOrderItemDto);
  }

  @Get('order/:orderId')
  @ApiOperation({ summary: 'Get order items by order ID' })
  @ApiResponse({
    status: 200,
    description: 'OrderItems retrieved successfully',
  })
  async getOrderItemsByOrderId(
    @Param('orderId') orderId: number,
  ): Promise<OrderItem[]> {
    return this.orderItemService.getOrderItemsByOrderId(orderId);
  }
}

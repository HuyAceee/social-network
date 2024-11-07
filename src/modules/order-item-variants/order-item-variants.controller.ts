import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrderItemVariant } from './entities/order-item-variant.entity';
import { OrderItemVariantService } from './order-item-variants.service';

@ApiTags('OrderItemVariants')
@Controller('order-item-variants')
export class OrderItemVariantController {
  constructor(private orderItemVariantService: OrderItemVariantService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order item variant' })
  @ApiResponse({
    status: 201,
    description: 'OrderItemVariant created successfully',
  })
  async createOrderItemVariant(
    @Body() orderItemVariant: OrderItemVariant,
  ): Promise<OrderItemVariant> {
    return this.orderItemVariantService.createOrderItemVariant(
      orderItemVariant,
    );
  }

  @Get('order-item/:orderItemId')
  @ApiOperation({ summary: 'Get order item variants by order item ID' })
  @ApiResponse({
    status: 200,
    description: 'OrderItemVariants retrieved successfully',
  })
  async getOrderItemVariantsByOrderItemId(
    @Param('orderItemId') orderItemId: number,
  ): Promise<OrderItemVariant[]> {
    return this.orderItemVariantService.getOrderItemVariantsByOrderItemId(
      orderItemId,
    );
  }
}

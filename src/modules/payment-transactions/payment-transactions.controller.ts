import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { PaymentTransactionService } from './payment-transactions.service';

@ApiTags('PaymentTransactions')
@Controller('payment-transactions')
export class PaymentTransactionController {
  constructor(private paymentTransactionService: PaymentTransactionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new payment transaction' })
  @ApiResponse({
    status: 201,
    description: 'Payment transaction created successfully',
  })
  async createPaymentTransaction(
    @Body() createPaymentTransactionDto: CreatePaymentTransactionDto,
  ): Promise<PaymentTransaction> {
    return this.paymentTransactionService.createPaymentTransaction(
      createPaymentTransactionDto,
    );
  }

  @Get('order/:orderId')
  @ApiOperation({ summary: 'Get payment transactions by order ID' })
  @ApiResponse({
    status: 200,
    description: 'Payment transactions retrieved successfully',
  })
  async getPaymentTransactionsByOrderId(
    @Param('orderId') orderId: number,
  ): Promise<PaymentTransaction[]> {
    return this.paymentTransactionService.getPaymentTransactionsByOrderId(
      orderId,
    );
  }
}

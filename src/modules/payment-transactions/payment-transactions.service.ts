import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { PaymentTransaction } from './entities/payment-transaction.entity';

@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private paymentTransactionRepository: Repository<PaymentTransaction>,
  ) {}

  async createPaymentTransaction(
    createPaymentTransactionDto: CreatePaymentTransactionDto,
  ): Promise<PaymentTransaction> {
    const paymentTransaction = this.paymentTransactionRepository.create(
      createPaymentTransactionDto,
    );
    return await this.paymentTransactionRepository.save(paymentTransaction);
  }

  async getPaymentTransactionsByOrderId(
    orderId: number,
  ): Promise<PaymentTransaction[]> {
    return await this.paymentTransactionRepository.find({
      where: { order: { id: orderId } },
    });
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { PaymentTransactionController } from './payment-transactions.controller';
import { PaymentTransactionService } from './payment-transactions.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentTransaction])],
  providers: [PaymentTransactionService],
  controllers: [PaymentTransactionController],
  exports: [PaymentTransactionService],
})
export class PaymentTransactionModule {}

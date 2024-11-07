import { IsNumber, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethodEnum } from 'src/types/enums';

export class CreatePaymentTransactionDto {
  @IsNumber()
  @ApiProperty({ example: 99.99, description: 'Payment amount' })
  amount: number;

  @IsEnum(PaymentMethodEnum)
  @ApiProperty({
    enum: PaymentMethodEnum,
    example: PaymentMethodEnum.CREDIT_CARD,
    description: 'Payment method',
  })
  paymentMethod: PaymentMethodEnum;
}

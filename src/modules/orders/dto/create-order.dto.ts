import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaymentMethodEnum } from 'src/types/enums';

export class CreateOrderDto {
  @IsString()
  @ApiProperty({
    example: '123 Main St, Anytown, CA 12345',
    description: 'Shipping address',
  })
  shippingAddress: string;

  @IsString()
  @ApiProperty({
    example: '456 Elm St, Newtown, CA 54321',
    description: 'Billing address',
  })
  billingAddress: string;

  @IsEnum(PaymentMethodEnum)
  @ApiProperty({
    enum: PaymentMethodEnum,
    example: PaymentMethodEnum.CREDIT_CARD,
    description: 'Payment method',
  })
  paymentMethod: PaymentMethodEnum;
}

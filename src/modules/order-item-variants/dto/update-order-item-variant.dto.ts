import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderItemVariantDto } from './create-order-item-variant.dto';

export class UpdateOrderItemVariantDto extends PartialType(
  CreateOrderItemVariantDto,
) {}

// order-item-variant.entity.ts
import { OrderItem } from 'src/modules/order-items/entities/order-item.entity';
import { ProductVariant } from 'src/modules/product-variants/entities/product-variant.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('order_item_variants')
export class OrderItemVariant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrderItem, (orderItem) => orderItem.variants)
  orderItem: OrderItem;

  @ManyToOne(() => ProductVariant, (variant) => variant.orderItemVariants)
  productVariant: ProductVariant;
}

// order-item.entity.ts
import { OrderItemVariant } from 'src/modules/order-item-variants/entities/order-item-variant.entity';
import { Order } from 'src/modules/orders/entities/order.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { OrderStatusEnum } from 'src/types/enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;

  @Column()
  productName: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'enum', enum: OrderStatusEnum })
  status: OrderStatusEnum;

  @Column({ type: 'int' })
  price: number;

  @Column()
  mediaUrl: string;

  @OneToMany(() => OrderItemVariant, (variant) => variant.orderItem)
  variants: OrderItemVariant[];
}

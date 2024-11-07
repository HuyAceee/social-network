// order.entity.ts
import { OrderItem } from 'src/modules/order-items/entities/order-item.entity';
import { PaymentTransaction } from 'src/modules/payment-transactions/entities/payment-transaction.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  OrderStatusEnum,
  PaymentMethodEnum,
  PaymentStatusEnum,
} from 'src/types/enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column({ type: 'enum', enum: OrderStatusEnum })
  status: OrderStatusEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'int' })
  totalPrice: number;

  @Column()
  shippingAddress: string;

  @Column()
  billingAddress: string;

  @Column({ type: 'enum', enum: PaymentMethodEnum })
  paymentMethod: PaymentMethodEnum;

  @Column({ type: 'enum', enum: PaymentStatusEnum })
  paymentStatus: PaymentStatusEnum;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];

  @OneToMany(() => PaymentTransaction, (transaction) => transaction.order)
  transactions: PaymentTransaction[];
}

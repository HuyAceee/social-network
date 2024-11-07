// product-variant.entity.ts
import { OrderItemVariant } from 'src/modules/order-item-variants/entities/order-item-variant.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { ProductVariationEnum } from 'src/types/enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('product_variants')
export class ProductVariant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;

  @OneToMany(() => OrderItemVariant, (variant) => variant.productVariant)
  orderItemVariants: OrderItemVariant[];

  @Column({ type: 'enum', enum: ProductVariationEnum })
  type: ProductVariationEnum;

  @Column()
  value: string;
}

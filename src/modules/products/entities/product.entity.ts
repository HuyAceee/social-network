// product.entity.ts
import { Merchant } from 'src/modules/merchants/entities/merchant.entity';
import { OrderItem } from 'src/modules/order-items/entities/order-item.entity';
import { ProductCategory } from 'src/modules/product-categories/entities/product-category.entity';
import { ProductVariant } from 'src/modules/product-variants/entities/product-variant.entity';
import { Review } from 'src/modules/reviews/entities/review.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { WishlistItem } from 'src/modules/wishlist-items/entities/wishlist-item.entity';
import { Wishlist } from 'src/modules/wishlists/entities/wishlist.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @ManyToOne(() => Merchant, (merchant) => merchant.products)
  merchant: Merchant;

  @ManyToMany(() => ProductCategory, (category) => category.products)
  categories: ProductCategory[];

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  brand: string;

  @Column({ type: 'float' })
  weight: number;

  @Column()
  dimensions: string;

  @Column({ type: 'float' })
  rating: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'float' })
  sale: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'timestamp' })
  saleExpireAt: Date;

  @Column({ type: 'float' })
  quantity: number;

  @Column({ type: 'float' })
  soldQuantity: number;

  @OneToMany(() => ProductVariant, (variant) => variant.product)
  variants: ProductVariant[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @OneToMany(() => WishlistItem, (wishlist) => wishlist.product)
  wishlists: Wishlist[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];
}

// user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import { Address } from './address.entity';
import * as bcrypt from 'bcrypt';
import { Device } from 'src/modules/devices/entities/device.entity';
import { Follow } from 'src/modules/follows/entities/follow.entity';
import { Gallery } from 'src/modules/galleries/entities/gallery.entity';
import { Merchant } from 'src/modules/merchants/entities/merchant.entity';
import { Message } from 'src/modules/messages/entities/message.entity';
import { Order } from 'src/modules/orders/entities/order.entity';
import { Post } from 'src/modules/posts/entities/post.entity';
import { ProductCategory } from 'src/modules/product-categories/entities/product-category.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Reaction } from 'src/modules/reactions/entities/reaction.entity';
import { Review } from 'src/modules/reviews/entities/review.entity';
import { Wishlist } from 'src/modules/wishlists/entities/wishlist.entity';
import { RoleEnum, AccountStatusEnum } from 'src/types/enums';
import { Comment } from 'src/modules/comments/entities/comment.entity';
import { Notification } from 'src/modules/notifications/entities/notification.entity';
import { Exclude, Transform } from 'class-transformer';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.USER })
  role: RoleEnum;

  @Column({
    type: 'enum',
    enum: AccountStatusEnum,
    default: AccountStatusEnum.ACTIVE,
  })
  status: AccountStatusEnum;

  @Column()
  username: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @Column()
  bio: string;

  @Column()
  birthday: Date;

  @Column()
  lastLogin: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToOne(() => Merchant, (merchant) => merchant.user)
  merchants: Merchant;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Reaction, (reaction) => reaction.user)
  reactions: Reaction[];

  @OneToMany(() => Follow, (follow) => follow.user)
  follows: Follow[];

  @OneToMany(() => Follow, (follow) => follow.user)
  followings: Follow[];

  @OneToMany(() => Device, (device) => device.user)
  devices: Device[];

  @OneToMany(() => Gallery, (gallery) => gallery.user)
  galleries: Gallery[];

  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];

  @OneToMany(() => ProductCategory, (category) => category.user)
  productCategories: ProductCategory[];

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.user)
  wishlists: Wishlist[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @Column({ nullable: true })
  @Exclude()
  @Transform((value) => {
    if (!value) return '';
  })
  refreshToken: string | null;

  @Column({ nullable: true })
  public twoFactorAuthenticationSecret?: string;

  @Column({ default: false })
  public isTwoFactorAuthenticationEnabled: boolean;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}

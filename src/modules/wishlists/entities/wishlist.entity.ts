// wishlist.entity.ts
import { User } from 'src/modules/users/entities/user.entity';
import { WishlistItem } from 'src/modules/wishlist-items/entities/wishlist-item.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('wishlists')
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.wishlists)
  user: User;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => WishlistItem, (item) => item.wishlist)
  items: WishlistItem[];
}

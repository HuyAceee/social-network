// merchant.entity.ts
import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { MerchantStatusEnum } from 'src/types/enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('merchants')
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.merchants)
  user: User;

  @Column()
  countryCode: string;

  @Column({
    type: 'enum',
    enum: MerchantStatusEnum,
    default: MerchantStatusEnum.OPEN,
  })
  status: MerchantStatusEnum;

  @Column()
  merchantName: string;

  @Column()
  address: string;

  @Column()
  websiteUrl: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  logoUrl: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Product, (product) => product.merchant)
  products: Product[];
}

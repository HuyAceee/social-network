// product-category.entity.ts
import { Product } from 'src/modules/products/entities/product.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity('product_categories')
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.productCategories)
  user: User;

  @ManyToOne(() => ProductCategory, (category) => category.children)
  parentCategory: ProductCategory;

  @OneToMany(() => ProductCategory, (category) => category.parentCategory)
  children: ProductCategory[];

  @Column()
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}

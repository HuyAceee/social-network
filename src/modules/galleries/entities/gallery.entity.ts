// gallery.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MediaTypeEnum } from 'src/types/enums';
import { User } from 'src/modules/users/entities/user.entity';

@Entity('galleries')
export class Gallery {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.galleries)
  user: User;

  @Column({ type: 'enum', enum: MediaTypeEnum })
  type: MediaTypeEnum;

  @Column()
  mediaUrl: string;
}

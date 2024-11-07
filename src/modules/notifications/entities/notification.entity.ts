// notification.entity.ts
import { User } from 'src/modules/users/entities/user.entity';
import { NotificationEnum } from 'src/types/enums';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.notifications)
  user: User;

  @Column()
  targetId: number;

  @Column({ type: 'enum', enum: NotificationEnum })
  type: NotificationEnum;

  @Column()
  link: string; // optional, link to the related content

  @Column({ default: false })
  isRead: boolean;

  @Column()
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}

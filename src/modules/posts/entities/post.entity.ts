// post.entity.ts
import { Comment } from 'src/modules/comments/entities/comment.entity';
import { Reaction } from 'src/modules/reactions/entities/reaction.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { MediaTypeEnum } from 'src/types/enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column({ type: 'enum', enum: MediaTypeEnum })
  mediaType: MediaTypeEnum;

  @Column()
  mediaUrl: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @OneToMany(() => Reaction, (reaction) => reaction.post)
  reactions: Reaction[];
}

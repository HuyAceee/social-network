import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { Reaction } from './entities/reaction.entity';

@Injectable()
export class ReactionService {
  constructor(
    @InjectRepository(Reaction)
    private reactionRepository: Repository<Reaction>,
  ) {}

  async createReaction(
    createReactionDto: CreateReactionDto,
  ): Promise<Reaction> {
    const reaction = this.reactionRepository.create(createReactionDto);
    return await this.reactionRepository.save(reaction);
  }

  async getReactionsByPostId(postId: number): Promise<Reaction[]> {
    return await this.reactionRepository.find({
      where: { post: { id: postId } },
    });
  }

  async getReactionsByCommentId(commentId: number): Promise<Reaction[]> {
    return await this.reactionRepository.find({
      where: { comment: { id: commentId } },
    });
  }

  async getUserReactionsByPostId(
    userId: number,
    postId: number,
  ): Promise<Reaction[]> {
    return await this.reactionRepository.find({
      where: { user: { id: userId }, post: { id: postId } },
    });
  }

  async getUserReactionsByCommentId(
    userId: number,
    commentId: number,
  ): Promise<Reaction[]> {
    return await this.reactionRepository.find({
      where: { user: { id: userId }, comment: { id: commentId } },
    });
  }
}

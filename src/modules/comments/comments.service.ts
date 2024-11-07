import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async createComment(createCommentDto: CreateCommentDto) {
    return this.commentRepository.save(createCommentDto);
  }

  async updateComment(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const comment = await this.commentRepository.findOneBy({ id });
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    Object.assign(comment, updateCommentDto);
    return await this.commentRepository.save(comment);
  }

  async deleteComment(id: number): Promise<void> {
    const result = await this.commentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Comment not found');
    }
  }

  async getCommentById(id: number): Promise<Comment | undefined> {
    return await this.commentRepository.findOneBy({ id });
  }

  async getAllComments(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  // Additional methods for specific use cases, e.g.,
  async getCommentsByPost(postId: number) {
    return await this.commentRepository.findAndCount({
      where: { post: { id: postId } },
    });
  }
}

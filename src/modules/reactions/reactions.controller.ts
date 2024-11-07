import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { Reaction } from './entities/reaction.entity';
import { ReactionService } from './reactions.service';

@ApiTags('Reactions')
@Controller('reactions')
export class ReactionController {
  constructor(private reactionService: ReactionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new reaction' })
  @ApiResponse({ status: 201, description: 'Reaction created successfully' })
  async createReaction(
    @Body() createReactionDto: CreateReactionDto,
  ): Promise<Reaction> {
    return this.reactionService.createReaction(createReactionDto);
  }

  @Get('post/:postId')
  @ApiOperation({ summary: 'Get reactions for a post' })
  @ApiResponse({ status: 200, description: 'Reactions retrieved successfully' })
  async getReactionsByPostId(
    @Param('postId') postId: number,
  ): Promise<Reaction[]> {
    return this.reactionService.getReactionsByPostId(postId);
  }

  @Get('comment/:commentId')
  @ApiOperation({ summary: 'Get reactions for a comment' })
  @ApiResponse({ status: 200, description: 'Reactions retrieved successfully' })
  async getReactionsByCommentId(
    @Param('commentId') commentId: number,
  ): Promise<Reaction[]> {
    return this.reactionService.getReactionsByCommentId(commentId);
  }

  @Get('user/:userId/post/:postId')
  @ApiOperation({ summary: "Get user's reactions for a post" })
  @ApiResponse({
    status: 200,
    description: "User's reactions retrieved successfully",
  })
  async getUserReactionsByPostId(
    @Param('userId') userId: number,
    @Param('postId') postId: number,
  ): Promise<Reaction[]> {
    return this.reactionService.getUserReactionsByPostId(userId, postId);
  }

  @Get('user/:userId/comment/:commentId')
  @ApiOperation({ summary: "Get user's reactions for a comment" })
  @ApiResponse({
    status: 200,
    description: "User's reactions retrieved successfully",
  })
  async getUserReactionsByCommentId(
    @Param('userId') userId: number,
    @Param('commentId') commentId: number,
  ): Promise<Reaction[]> {
    return this.reactionService.getUserReactionsByCommentId(userId, commentId);
  }
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { ReviewService } from './reviews.service';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new review' })
  @ApiResponse({ status: 201, description: 'Review created successfully' })
  async createReview(
    @Body() createReviewDto: CreateReviewDto,
  ): Promise<Review> {
    return this.reviewService.createReview(createReviewDto);
  }

  @Get('product/:productId')
  @ApiOperation({ summary: 'Get reviews for a product' })
  @ApiResponse({ status: 200, description: 'Reviews retrieved successfully' })
  async getReviewsByProductId(
    @Param('productId') productId: number,
  ): Promise<Review[]> {
    return this.reviewService.getReviewsByProductId(productId);
  }

  @Get('user/:userId/product/:productId')
  @ApiOperation({ summary: "Get user's review for a product" })
  @ApiResponse({
    status: 200,
    description: "User's review retrieved successfully",
  })
  async getUserReviewsByProductId(
    @Param('userId') userId: number,
    @Param('productId') productId: number,
  ): Promise<Review[]> {
    return this.reviewService.getUserReviewsByProductId(userId, productId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a review' })
  @ApiResponse({ status: 200, description: 'Review updated successfully' })
  async updateReview(
    @Param('id') id: number,
    @Body() updateReviewDto: UpdateReviewDto,
  ): Promise<Review> {
    return this.reviewService.updateReview(id, updateReviewDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a review' })
  @ApiResponse({ status: 200, description: 'Review deleted successfully' })
  async deleteReview(@Param('id') id: number): Promise<void> {
    return this.reviewService.deleteReview(id);
  }
}

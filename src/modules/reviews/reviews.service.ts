import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
    const review = this.reviewRepository.create(createReviewDto);
    return await this.reviewRepository.save(review);
  }

  async updateReview(
    id: number,
    updateReviewDto: UpdateReviewDto,
  ): Promise<Review> {
    const review = await this.reviewRepository.findOneBy({ id });
    if (!review) {
      throw new NotFoundException('Review not found');
    }
    Object.assign(review, updateReviewDto);
    return await this.reviewRepository.save(review);
  }

  async deleteReview(id: number): Promise<void> {
    const result = await this.reviewRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Review not found');
    }
  }

  async getReviewsByProductId(productId: number): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: { product: { id: productId } },
    });
  }

  async getUserReviewsByProductId(
    userId: number,
    productId: number,
  ): Promise<Review[]> {
    return await this.reviewRepository.find({
      where: { user: { id: userId }, product: { id: productId } },
    });
  }
}

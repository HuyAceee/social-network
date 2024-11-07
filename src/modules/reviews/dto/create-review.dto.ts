import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @IsNumber()
  @ApiProperty({ example: 5, description: 'Review rating' })
  rating: number;

  @IsString()
  @ApiProperty({ example: 'Great product!', description: 'Review comment' })
  comment: string;
}

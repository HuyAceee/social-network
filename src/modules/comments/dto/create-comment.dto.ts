import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @IsString()
  @ApiProperty({ example: 'This is a comment', description: 'Comment content' })
  content: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Comment image URL (optional)',
    required: false,
  })
  files?: string[];
}

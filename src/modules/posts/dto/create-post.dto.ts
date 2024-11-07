import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MediaTypeEnum } from 'src/types/enums';

export class CreatePostDto {
  @IsEnum(MediaTypeEnum)
  @ApiProperty({
    enum: MediaTypeEnum,
    example: MediaTypeEnum.IMG,
    description: 'Media type (IMG or VOD)',
  })
  mediaType: MediaTypeEnum;

  @IsString()
  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Media URL',
  })
  mediaUrl: string;

  @IsString()
  @ApiProperty({ example: 'My Awesome Post', description: 'Post title' })
  title: string;

  @IsString()
  @ApiProperty({
    example: 'This is the content of the post',
    description: 'Post content',
  })
  content: string;
}

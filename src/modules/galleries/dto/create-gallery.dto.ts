import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MediaTypeEnum } from 'src/types/enums';

export class CreateGalleryDto {
  @IsEnum(MediaTypeEnum)
  @ApiProperty({
    enum: MediaTypeEnum,
    example: MediaTypeEnum.IMG,
    description: 'Media type (IMG or VOD)',
  })
  type: MediaTypeEnum;

  @IsString()
  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'Media URL',
  })
  mediaUrl: string;
}

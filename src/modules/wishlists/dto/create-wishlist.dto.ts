import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWishlistDto {
  @IsString()
  @ApiProperty({ example: 'My Gadget Wishlist', description: 'Wishlist name' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'wishlist_icon.png',
    description: 'Wishlist icon (optional)',
    required: false,
  })
  icon?: string;
}

import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WishlistItem } from './entities/wishlist-item.entity';
import { WishlistItemService } from './wishlist-items.service';

@ApiTags('WishlistItems')
@Controller('wishlist-items')
export class WishlistItemController {
  constructor(private wishlistItemService: WishlistItemService) {}

  @Post()
  @ApiOperation({ summary: 'Add a product to a wishlist' })
  @ApiResponse({
    status: 201,
    description: 'Wishlist item created successfully',
  })
  async createWishlistItem(
    @Body()
    { wishlistId, productId }: { wishlistId: number; productId: number },
  ): Promise<WishlistItem> {
    return this.wishlistItemService.createWishlistItem(wishlistId, productId);
  }

  @Get('wishlist/:wishlistId')
  @ApiOperation({ summary: 'Get wishlist items by wishlist ID' })
  @ApiResponse({
    status: 200,
    description: 'Wishlist items retrieved successfully',
  })
  async getWishlistItemsByWishlistId(
    @Param('wishlistId') wishlistId: number,
  ): Promise<WishlistItem[]> {
    return this.wishlistItemService.getWishlistItemsByWishlistId(wishlistId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a wishlist item' })
  @ApiResponse({
    status: 200,
    description: 'Wishlist item deleted successfully',
  })
  async deleteWishlistItem(@Param('id') id: number): Promise<void> {
    return this.wishlistItemService.deleteWishlistItem(id);
  }
}

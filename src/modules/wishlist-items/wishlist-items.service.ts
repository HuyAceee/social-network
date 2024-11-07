import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WishlistItem } from '../wishlist-items/entities/wishlist-item.entity';

@Injectable()
export class WishlistItemService {
  constructor(
    @InjectRepository(WishlistItem)
    private wishlistItemRepository: Repository<WishlistItem>,
  ) {}

  async createWishlistItem(
    wishlistItemId: number,
    productId: number,
  ): Promise<WishlistItem> {
    const wishlistItem = new WishlistItem();
    wishlistItem.wishlist.id = wishlistItemId;
    wishlistItem.product.id = productId;
    return await this.wishlistItemRepository.save(wishlistItem);
  }

  async getWishlistItemsByWishlistId(
    wishlistId: number,
  ): Promise<WishlistItem[]> {
    return await this.wishlistItemRepository.find({
      where: { wishlist: { id: wishlistId } },
    });
  }

  async deleteWishlistItem(id: number): Promise<void> {
    const result = await this.wishlistItemRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('WishlistItem not found');
    }
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistItem } from './entities/wishlist-item.entity';
import { WishlistItemController } from './wishlist-items.controller';
import { WishlistItemService } from './wishlist-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([WishlistItem])],
  providers: [WishlistItemService],
  controllers: [WishlistItemController],
  exports: [WishlistItemService],
})
export class WishlistItemModule {}

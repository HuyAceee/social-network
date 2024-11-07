import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
  ) {}

  async createWishlist(
    createWishlistDto: CreateWishlistDto,
  ): Promise<Wishlist> {
    const wishlist = this.wishlistRepository.create(createWishlistDto);
    return await this.wishlistRepository.save(wishlist);
  }

  async updateWishlist(
    id: number,
    updateWishlistDto: UpdateWishlistDto,
  ): Promise<Wishlist> {
    const wishlist = await this.wishlistRepository.findOneBy({ id });
    if (!wishlist) {
      throw new NotFoundException('Wishlist not found');
    }
    Object.assign(wishlist, updateWishlistDto);
    return await this.wishlistRepository.save(wishlist);
  }

  async deleteWishlist(id: number): Promise<void> {
    const result = await this.wishlistRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Wishlist not found');
    }
  }

  async getWishlistById(id: number): Promise<Wishlist | undefined> {
    return await this.wishlistRepository.findOneBy({ id });
  }

  async getWishlistsByUserId(userId: number): Promise<Wishlist[]> {
    return await this.wishlistRepository.find({
      where: { user: { id: userId } },
    });
  }
}

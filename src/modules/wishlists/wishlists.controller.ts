import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
import { WishlistService } from './wishlists.service';

@ApiTags('Wishlists')
@Controller('wishlists')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new wishlist' })
  @ApiResponse({ status: 201, description: 'Wishlist created successfully' })
  async createWishlist(
    @Body() createWishlistDto: CreateWishlistDto,
  ): Promise<Wishlist> {
    return this.wishlistService.createWishlist(createWishlistDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a wishlist by ID' })
  @ApiResponse({ status: 200, description: 'Wishlist retrieved successfully' })
  async getWishlistById(
    @Param('id') id: number,
  ): Promise<Wishlist | undefined> {
    return this.wishlistService.getWishlistById(id);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get wishlists by user ID' })
  @ApiResponse({ status: 200, description: 'Wishlists retrieved successfully' })
  async getWishlistsByUserId(
    @Param('userId') userId: number,
  ): Promise<Wishlist[]> {
    return this.wishlistService.getWishlistsByUserId(userId);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a wishlist' })
  @ApiResponse({ status: 200, description: 'Wishlist updated successfully' })
  async updateWishlist(
    @Param('id') id: number,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ): Promise<Wishlist> {
    return this.wishlistService.updateWishlist(id, updateWishlistDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a wishlist' })
  @ApiResponse({ status: 200, description: 'Wishlist deleted successfully' })
  async deleteWishlist(@Param('id') id: number): Promise<void> {
    return this.wishlistService.deleteWishlist(id);
  }
}

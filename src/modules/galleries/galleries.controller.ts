import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { GalleryService } from './galleries.service';

@Controller('galleries')
export class GalleryController {
  constructor(private galleryService: GalleryService) {}

  @Post()
  async createGallery(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.createGallery(createGalleryDto);
  }

  @Get('user/:userId')
  async getGalleriesByUser(@Param('userId') userId: number) {
    return this.galleryService.getGalleriesByUserId(userId);
  }
}

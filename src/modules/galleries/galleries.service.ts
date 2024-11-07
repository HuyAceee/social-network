import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { Gallery } from './entities/gallery.entity';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private galleryRepository: Repository<Gallery>,
  ) {}

  async createGallery(createGalleryDto: CreateGalleryDto): Promise<Gallery> {
    const gallery = this.galleryRepository.create(createGalleryDto);
    return await this.galleryRepository.save(gallery);
  }

  async getGalleriesByUserId(id: number): Promise<Gallery[]> {
    return await this.galleryRepository.find({ where: { user: { id } } });
  }
}

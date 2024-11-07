import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from './entities/gallery.entity';
import { GalleryController } from './galleries.controller';
import { GalleryService } from './galleries.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])],
  providers: [GalleryService],
  controllers: [GalleryController],
  exports: [GalleryService],
})
export class GalleryModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Follow } from './entities/follow.entity';
import { FollowController } from './follows.controller';
import { FollowService } from './follows.service';

@Module({
  imports: [TypeOrmModule.forFeature([Follow])],
  providers: [FollowService],
  controllers: [FollowController],
  exports: [FollowService],
})
export class FollowModule {}

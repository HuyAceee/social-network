import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reaction } from './entities/reaction.entity';
import { ReactionController } from './reactions.controller';
import { ReactionService } from './reactions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reaction])],
  providers: [ReactionService],
  controllers: [ReactionController],
  exports: [ReactionService],
})
export class ReactionModule {}

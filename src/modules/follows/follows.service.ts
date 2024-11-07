import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { User } from '../users/entities/user.entity';
import { CreateFollowDto } from './dto/create-follow.dto';
import { Follow } from './entities/follow.entity';

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private followRepository: Repository<Follow>,
  ) {}

  async createFollow(createFollowDto: CreateFollowDto): Promise<Follow> {
    const follow = this.followRepository.create(createFollowDto);
    return await this.followRepository.save(follow);
  }

  async getFollowersByUserId(id: number): Promise<Follow[]> {
    return await this.followRepository.find({ where: { user: { id } } });
  }

  // async getFollowingByUserId(userId: number): Promise<User[]> {
  //   const follows = await this.followRepository.find({ where: { userId } });
  //   return follows.map((follow) => follow.following);
  // }
}

import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { FollowService } from './follows.service';

@Controller('follows')
export class FollowController {
  constructor(private followService: FollowService) {}

  @Post()
  async createFollow(@Body() createFollowDto: CreateFollowDto) {
    return this.followService.createFollow(createFollowDto);
  }

  @Get('user/:userId')
  async getFollowsByUser(@Param('userId') userId: number) {
    return this.followService.getFollowersByUserId(userId);
  }

  @Get('followers/:userId')
  async getFollowersByUserId(@Param('userId') userId: number) {
    return this.followService.getFollowersByUserId(userId);
  }

  // @Get('following/:userId')
  // async getFollowingByUserId(@Param('userId') userId: number) {
  //   return this.followService.getFollowingByUserId(userId);
  // }
}

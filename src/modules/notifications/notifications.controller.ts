import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationService } from './notifications.service';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new notification' })
  @ApiResponse({
    status: 201,
    description: 'Notification created successfully',
  })
  async createNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ) {
    return this.notificationService.createNotification(createNotificationDto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get notifications for a user' })
  @ApiResponse({
    status: 200,
    description: 'Notifications retrieved successfully',
  })
  async getNotificationsByUser(@Param('userId') userId: number) {
    return this.notificationService.getNotificationsByUserId(userId);
  }

  @Get('unread/user/:userId')
  @ApiOperation({ summary: 'Get unread notifications for a user' })
  @ApiResponse({
    status: 200,
    description: 'Unread notifications retrieved successfully',
  })
  async getUnreadNotificationsByUser(@Param('userId') userId: number) {
    return this.notificationService.getUnreadNotificationsByUserId(userId);
  }

  @Patch('mark-as-read/:userId')
  @ApiOperation({ summary: 'Mark all notifications for a user as read' })
  @ApiResponse({
    status: 200,
    description: 'Notifications marked as read successfully',
  })
  async markNotificationsAsRead(@Param('userId') userId: number) {
    await this.notificationService.markNotificationsAsRead(userId);
    return { message: 'Notifications marked as read' };
  }
}

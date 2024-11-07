import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private notificationRepository: Repository<Notification>,
  ) {}

  async createNotification(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const notification = this.notificationRepository.create(
      createNotificationDto,
    );
    return await this.notificationRepository.save(notification);
  }

  async getNotificationsByUserId(userId: number): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { user: { id: userId } },
    });
  }

  async getUnreadNotificationsByUserId(
    userId: number,
  ): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { user: { id: userId }, isRead: false },
    });
  }

  async markNotificationsAsRead(userId: number): Promise<void> {
    await this.notificationRepository.update(
      { user: { id: userId } },
      { isRead: true },
    );
  }
}

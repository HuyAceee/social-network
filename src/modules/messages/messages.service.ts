import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from '../messages/dto/create-message.dto';
import { Message } from '../messages/entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async createMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const message = this.messageRepository.create(createMessageDto);
    return await this.messageRepository.save(message);
  }

  async getMessagesByUser(userId: number): Promise<Message[]> {
    return await this.messageRepository.find({
      where: [{ user: { id: userId } }, { receiverId: userId }],
    });
  }

  async getMessagesBetweenUsers(
    senderId: number,
    receiverId: number,
  ): Promise<Message[]> {
    return await this.messageRepository.find({
      where: [
        { user: { id: senderId }, receiverId },
        { user: { id: receiverId }, receiverId: senderId },
      ],
    });
  }
}

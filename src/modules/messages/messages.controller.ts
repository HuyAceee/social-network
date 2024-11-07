import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  async createMessage(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage(createMessageDto);
  }

  @Get('user/:userId')
  async getMessagesByUser(@Param('userId') userId: number) {
    return this.messageService.getMessagesByUser(userId);
  }

  @Get('between/:senderId/:receiverId')
  async getMessagesBetweenUsers(
    @Param('senderId') senderId: number,
    @Param('receiverId') receiverId: number,
  ) {
    return this.messageService.getMessagesBetweenUsers(senderId, receiverId);
  }
}

import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @IsString()
  @ApiProperty({
    example: 'Hello, how are you?',
    description: 'Message content',
  })
  content: string;

  @IsString()
  @ApiProperty({ example: 0, description: 'Recipient ID' })
  receiverId: number;
}

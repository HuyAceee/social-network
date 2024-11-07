import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ReactionTypeEnum } from 'src/types/enums';

export class CreateReactionDto {
  @IsEnum(ReactionTypeEnum)
  @ApiProperty({
    enum: ReactionTypeEnum,
    example: ReactionTypeEnum.LIKE,
    description: 'Reaction type',
  })
  type: ReactionTypeEnum;
}

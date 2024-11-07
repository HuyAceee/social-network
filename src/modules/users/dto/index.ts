import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 'id',
    description: 'id',
  })
  id: number;

  @ApiProperty({
    example: 'email',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'password',
  })
  password: string;

  @ApiProperty({
    example: 'name',
    description: 'name',
  })
  name: string;
}

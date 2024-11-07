import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto, RefreshTokenBodyDto } from './dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'register' })
  @ApiOkResponse({
    type: CreateUserDto,
  })
  @Post('register')
  createUser(@Body() user: CreateUserDto) {
    return this.authService.register(user);
  }

  @ApiOperation({ summary: 'login' })
  @ApiOkResponse({
    type: LoginUserDto,
  })
  @Post('login')
  login(@Body() loginDto: LoginUserDto) {
    return this.authService.login(loginDto);
  }

  @ApiOperation({ summary: 'refresh-token' })
  @ApiOkResponse({
    type: RefreshTokenBodyDto,
  })
  @Post('refresh')
  refresh(@Body() body: RefreshTokenBodyDto) {
    return this.authService.refresh(body.refreshToken);
  }
}

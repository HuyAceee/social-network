import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DeviceService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('devices')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post()
  async createDevice(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.createDevice(createDeviceDto);
  }

  @Get('user/:userId')
  async getDevicesByUser(@Param('userId') userId: number) {
    return this.deviceService.getDevicesByUserId(userId);
  }
}

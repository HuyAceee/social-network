import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { MerchantService } from './merchants.service';

@Controller('merchants')
export class MerchantController {
  constructor(private merchantService: MerchantService) {}

  @Post()
  async createMerchant(@Body() createMerchantDto: CreateMerchantDto) {
    return this.merchantService.createMerchant(createMerchantDto);
  }

  @Get(':id')
  async getMerchantById(@Param('id') id: number) {
    return this.merchantService.getMerchantById(id);
  }

  @Get('user/:userId')
  async getMerchantsByUserId(@Param('userId') userId: number) {
    return this.merchantService.getMerchantsByUserId(userId);
  }

  @Put(':id')
  async updateMerchant(
    @Param('id') id: number,
    @Body() updateMerchantDto: UpdateMerchantDto,
  ) {
    return this.merchantService.updateMerchant(id, updateMerchantDto);
  }

  @Delete(':id')
  async deleteMerchant(@Param('id') id: number) {
    return this.merchantService.deleteMerchant(id);
  }
}

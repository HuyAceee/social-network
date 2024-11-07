import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './entities/merchant.entity';
import { MerchantController } from './merchants.controller';
import { MerchantService } from './merchants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  providers: [MerchantService],
  controllers: [MerchantController],
  exports: [MerchantService],
})
export class MerchantModule {}

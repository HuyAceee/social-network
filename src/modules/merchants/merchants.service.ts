import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { Merchant } from './entities/merchant.entity';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant)
    private merchantRepository: Repository<Merchant>,
  ) {}

  async createMerchant(
    createMerchantDto: CreateMerchantDto,
  ): Promise<Merchant> {
    const merchant = this.merchantRepository.create(createMerchantDto);
    return await this.merchantRepository.save(merchant);
  }

  async updateMerchant(
    id: number,
    updateMerchantDto: UpdateMerchantDto,
  ): Promise<Merchant> {
    const merchant = await this.merchantRepository.findOneBy({ id });
    if (!merchant) {
      throw new NotFoundException('Merchant not found');
    }
    Object.assign(merchant, updateMerchantDto);
    return await this.merchantRepository.save(merchant);
  }

  async deleteMerchant(id: number): Promise<void> {
    const result = await this.merchantRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Merchant not found');
    }
  }

  async getMerchantById(id: number): Promise<Merchant | undefined> {
    return await this.merchantRepository.findOneBy({ id });
  }

  async getAllMerchants(): Promise<Merchant[]> {
    return await this.merchantRepository.find();
  }

  async getMerchantsByUserId(id: number): Promise<Merchant[]> {
    return await this.merchantRepository.find({ where: { user: { id } } });
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemVariantsService } from './order-item-variants.service';

describe('OrderItemVariantsService', () => {
  let service: OrderItemVariantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderItemVariantsService],
    }).compile();

    service = module.get<OrderItemVariantsService>(OrderItemVariantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemVariantsController } from './order-item-variants.controller';
import { OrderItemVariantsService } from './order-item-variants.service';

describe('OrderItemVariantsController', () => {
  let controller: OrderItemVariantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderItemVariantsController],
      providers: [OrderItemVariantsService],
    }).compile();

    controller = module.get<OrderItemVariantsController>(
      OrderItemVariantsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

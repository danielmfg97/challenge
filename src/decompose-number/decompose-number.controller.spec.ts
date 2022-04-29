import { Test, TestingModule } from '@nestjs/testing';
import { DecomposeNumberController } from './decompose-number.controller';
import { DecomposeNumberService } from './decompose-number.service';

describe('DecomposeNumberController', () => {
  let controller: DecomposeNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecomposeNumberController],
      providers: [DecomposeNumberService],
    }).compile();

    controller = module.get<DecomposeNumberController>(DecomposeNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

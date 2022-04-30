import { Test, TestingModule } from '@nestjs/testing';
import { NumberToCheckController } from './number-to-check.controller';
import { NumberToCheckService } from './number-to-check.service';

describe('DecomposeNumberController', () => {
  let numberToCheckController: NumberToCheckController;
  let numberToCheckService : NumberToCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumberToCheckController],
      providers: [NumberToCheckService],
    }).compile();

    numberToCheckController = module.get<NumberToCheckController>(NumberToCheckController);
    numberToCheckService = module.get<NumberToCheckService>(NumberToCheckService);
  });

  describe('checkNumber', () => {
    it('should return the decomposed number and the prime numbers if there is any', async () => {
      const result = {
        "decomposed": [
          1,
          2,
          5,
          10
        ],
        "primeNumbers": [
          5
        ]
      };
      expect(await numberToCheckController.checkNumber(10)).toBe(result);
    });
  });
});

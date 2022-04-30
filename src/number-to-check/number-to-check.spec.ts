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

  describe('checkNumber', () => {
    it('should return an error if the provided param is not a number', async () => {
      const result = {
          "statusCode": 400,
          "message": "Validation failed (numeric string is expected)",
          "error": "Bad Request"
        };
      expect(await numberToCheckController.checkNumber(10)).toBe(result);
    });
  });

  describe('checkNumber', () => {
    const result = {
      "statusCode": 400,
      "message": "The param has to be greater than 0"
    };
    
    it('should return a message if the param is 0 or lower', async () => {
      expect(await numberToCheckController.checkNumber(0)).toBe(result);
    });
  });
});

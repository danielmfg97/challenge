import { Test, TestingModule } from '@nestjs/testing';
import { NumberToCheckService } from './number-to-check.service';

describe('DecomposeNumberService', () => {
  let service: NumberToCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumberToCheckService],
    }).compile();

    service = module.get<NumberToCheckService>(NumberToCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

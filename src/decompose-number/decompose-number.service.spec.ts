import { Test, TestingModule } from '@nestjs/testing';
import { DecomposeNumberService } from './decompose-number.service';

describe('DecomposeNumberService', () => {
  let service: DecomposeNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecomposeNumberService],
    }).compile();

    service = module.get<DecomposeNumberService>(DecomposeNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

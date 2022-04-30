import { Module } from '@nestjs/common';
import { NumberToCheckService } from './number-to-check.service';
import { NumberToCheckController } from './number-to-check.controller';

@Module({
  controllers: [NumberToCheckController],
  providers: [NumberToCheckService]
})
export class DecomposeNumberModule {}

import { Module } from '@nestjs/common';
import { DecomposeNumberService } from './decompose-number.service';
import { DecomposeNumberController } from './decompose-number.controller';

@Module({
  exports: [DecomposeNumberService],
  providers: [DecomposeNumberService]
})
export class DecomposeNumberModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DecomposeNumberService } from './decompose-number.service';

@Controller('decompose-number')
export class DecomposeNumberController {
  constructor(private readonly decomposeNumberService: DecomposeNumberService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decomposeNumberService.findOne(+id);
  }
}

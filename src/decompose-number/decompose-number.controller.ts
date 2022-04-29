import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DecomposeNumberService } from './decompose-number.service';
import { CreateDecomposeNumberDto } from './dto/create-decompose-number.dto';
import { UpdateDecomposeNumberDto } from './dto/update-decompose-number.dto';

@Controller('decompose-number')
export class DecomposeNumberController {
  constructor(private readonly decomposeNumberService: DecomposeNumberService) {}

  @Post()
  create(@Body() createDecomposeNumberDto: CreateDecomposeNumberDto) {
    return this.decomposeNumberService.create(createDecomposeNumberDto);
  }

  @Get()
  findAll() {
    return this.decomposeNumberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decomposeNumberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDecomposeNumberDto: UpdateDecomposeNumberDto) {
    return this.decomposeNumberService.update(+id, updateDecomposeNumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.decomposeNumberService.remove(+id);
  }
}

import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { NumberToCheckService } from './number-to-check.service';


@Controller('number-to-check')
export class NumberToCheckController {
  constructor(private readonly numberToCheckService: NumberToCheckService) {}

  @Get(':numberToBeChecked')
  checkNumber(@Param('numberToBeChecked', ParseIntPipe) numberToBeChecked: number) {
    if (numberToBeChecked <= 0) {
      throw new HttpException('The param has to be greater than 0', HttpStatus.BAD_REQUEST);
    }
    return this.numberToCheckService.checkNumber(+numberToBeChecked);
  }
}

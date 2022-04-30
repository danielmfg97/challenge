import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { NumberToCheckService } from './number-to-check.service';


@Controller('number-to-check')
export class NumberToCheckController {
  constructor(private readonly numberToCheckService: NumberToCheckService) {}

  @Get(':numberToBeChecked')
  checkNumber(@Param('numberToBeChecked', ParseIntPipe) numberToBeChecked: number) {
    if (isNaN(numberToBeChecked) || numberToBeChecked <= 0) {
      console.error('Entrada inválida, gentileza fornecer um NÚMERO maior que 0');
      process.exit()
    }
    return this.numberToCheckService.findOne(+numberToBeChecked);
  }
}
